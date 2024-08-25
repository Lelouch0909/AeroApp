import {View, Text, ScrollView, Image, Alert} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";
import {createUser} from "../../lib/appwrite";

const SignUp = () => {

    const [form, setform] = useState({
        userName: '',
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if (!form.userName || !form.email || !form.password) {
            Alert.alert("Error", "Please fill all the fields")
        }
        setIsSubmitting(true)
        try {
            const result = await createUser(form.email, form.password, form.userName);
            // Set To Global state ...
            router.replace("/home")
        } catch (e) {
            Alert.alert("Error", e.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className="bg-primary h-full">

            <ScrollView>

                <View
                    className="w-full justify-center min-h-[83vh] px-4 my-6"
                >

                    <Image source={images.logo} className="w-[115px] h-[35px]"
                           resizeMethod='contain'/>

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign Up to Aora</Text>

                    <FormField
                        title="Username"
                        value={form.userName}
                        handleChangeText={(e) => setform({...form, userName: e})}
                        otherStyle="mt-10"
                    ></FormField>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setform({...form, email: e})}
                        otherStyle="mt-7"
                        keyboardType="email-address"
                    ></FormField>

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setform({...form, password: e})}
                        otherStyle="mt-7"
                        keyboardType="password-address"
                    ></FormField>

                    <CustomButton title={"Sign Up"} handlePress={submit} containerStyles={"mt-7"}
                                  isLoading={isSubmitting}></CustomButton>

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">Have an account already ?</Text>
                        <Link href={"/sign-in"} className='text-lg font-psemibold text-secondary'>Sign in</Link>
                    </View>
                </View>


            </ScrollView>

        </SafeAreaView>)
}

export default SignUp