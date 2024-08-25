import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    projectId: "66c68b73003d99480185",
    platform: "com.lontsi.aora",
    databaseId: "66c68cd6000e298a0af9",
    usersCollectionId: "66c68d030003bf541fe1",
    videosCollectionId: "66c68d320018cb06445e",
    storageId: "66c68e660006572a04ca",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

// Register User

export const createUser = async (email, password, name) => {

    try {
        console.log(1111111122222222)
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        )

        console.log(newAccount)
        console.log(11111111)
        if (!newAccount) {
            throw error;
        }
        const avatarUrl = avatar.getInitials(name)
        await signIn(email, password);
        const newUser = await database.createDocument(config.databaseId, config.usersCollectionId, ID.unique(),
            {
                accountId: (await newAccount).$id,
                avatar:
                    avatarUrl,
                username:
                    name,
                email:
                    email,
                
            })
        console.log("newUser", newUser)
        return newUser;
    } catch (e) {
        throw new Error(e)
    }
}

export const signIn = async (email, password) => {

    try {
        return account.createEmailPasswordSession(email, password);
    } catch (e) {
        throw new Error(e)
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = account.get();
        if (!currentAccount) {
            throw new Error
        }
        const currentUser = await database.listDocuments(
            config.databaseId,
            config.usersCollectionId,
            [Query.equal('accountId', (await currentAccount).$id)]
        )
        if (!currentUser) {
            throw Error
        }
        return currentUser.documents[0]
    } catch (e) {
        throw new Error(e)
    }
}