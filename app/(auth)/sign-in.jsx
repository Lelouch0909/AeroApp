import {Alert, Image, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link, router} from 'expo-router'
import {createUser, signIn} from "../../lib/appwrite";

const SignIn = () => {

    const [form, setform] = useState({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)


    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert("Error", "Please fill all the fields")
        }
        setIsSubmitting(true)
        try {
            await signIn(form.email, form.password);
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

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log in to Aora</Text>

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

                    <CustomButton title={"Sign In"} handlePress={submit} containerStyles={"mt-7"}
                                  isLoading={isSubmitting}></CustomButton>

                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">Don't have an account ?</Text>
                        <Link href={"/sign-up"} className='text-lg font-psemibold text-secondary'>Sign Up</Link>
                    </View>
                </View>


            </ScrollView>

        </SafeAreaView>)
}

export default SignIn