import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({ title, value, handleChangeText, placeholder, otherStyle, ...props }) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

            <View className={`border-2 w-full h-16 px-4 bg-black-100 border-black-200 rounded-2xl focus:border-secondary items-center flex-row`}>

                <TextInput className="flex-1 text-white font-psemibold text-base" value={value}
                    onChangeText={handleChangeText} placeholder={placeholder} placeholderTextColor={'#7b7b8b'}
                    secureTextEntry={title === 'Password' && !showPassword} />

                {
                    title === 'Password' && (
                        <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

                            <Image source={!showPassword ? icons.eye : icons.eyeHide}
                                className="w-6 h-6 " resizeMethod='contain' />

                        </TouchableOpacity>
                    )
                }
            </View>


        </View>
    )
}

export default FormField