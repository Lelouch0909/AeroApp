import React from 'react'
import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { Image, Text, View } from "react-native";

const TabsLayout = () => {

    const TabIcon = ({ icon, color, focused, name }) => {
        return (

            <View className={`items-center justify-center gap-2`}>
                <Image source={icon} resizeMode="contain"
                    tintColor={color} className={"w-6 h-6 "}
                />
                <Text className={` ${focused ? "font-psemibold" : "font-pregular"}  text-xs `} style={{ color: color }}>{name}</Text>
            </View>
        )
    }

    return (
        <Tabs
            screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopWidth: 1,
                        borderTopColor: '#235353',
                        height: 65,
                    },
                }
            }        >
            <Tabs.Screen name="home" options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.home}
                        color={color}
                        focused={focused}
                        name="Home">
                    </TabIcon>
                )
            }} />

            <Tabs.Screen name="bookmark" options={{
                title: 'Bookmark',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.bookmark}
                        color={color}
                        focused={focused}
                        name="Bookmark">
                    </TabIcon>
                )
            }} />

            <Tabs.Screen name="create" options={{
                title: 'Create',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.plus}
                        color={color}
                        focused={focused}
                        name="Create">
                    </TabIcon>
                )
            }} />

            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon icon={icons.profile}
                        color={color}
                        focused={focused}
                        name="Profile">
                    </TabIcon>
                )
            }} />

        </Tabs>
    )
}

export default TabsLayout