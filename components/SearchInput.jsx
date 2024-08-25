import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const SearchInput = ({ title, value, handleChangeText, placeholder, otherStyle, ...props }) => {
    const [showPassword, setshowPassword] = useState(false)
    return (
        <View className={`space-x-4 border-2 w-full h-16 px-4 bg-black-100 border-black-200 rounded-2xl focus:border-secondary items-center flex-row`}>

            <TextInput className="mt-0.5 text-white flex-1 font-pregular text-base" value={value}
                onChangeText={handleChangeText} placeholder={"Search for a video topic"} placeholderTextColor={'#7b7b8b'}
                secureTextEntry={title === 'Password' && !showPassword} />


            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>

                <Image source={icons.search}
                    className="w-5 h-5 " resizeMethod='contain' />

            </TouchableOpacity>




        </View>
    )
}

export default SearchInput