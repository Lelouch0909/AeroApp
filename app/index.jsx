import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {

    const { isLoading, isLoggedIn } = useGlobalContext()

    if (!isLoading && isLoggedIn || true) {
        return (
            <Redirect href={'/home'} />
        )
    }

    return (

        <SafeAreaView className="bg-primary h-full">
            <StatusBar backgroundColor='#161622' style='light'></StatusBar>

            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full  justify-center  items-center h-full px-4">

                    <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode='contain' />
                    <Image source={images.cards} className=" w-full
                     h-[300px]" resizeMode='contain' />
                    <View className="relative mt-5">
                        <Text className="text-white text-center text-3xl font-bold">
                            Discover endless possibilities with{' '}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>
                        <Image source={images.path} className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
                            resizeMode='contain'></Image>
                    </View>
                    <Text className="text-center mt-7 text-sm font-pregular text-gray-100">
                        Where creativity meets innovation:embark on a journey of limitless exploration with Aora
                    </Text>
                    <CustomButton title="Continue with email" handlePress={() => {
                        router.push('sign-in')
                    }} containerStyles="w-full mt-7 "></CustomButton>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
