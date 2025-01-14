import { FlatList, Image, RefreshControl, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';

const Home = () => {

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = async () => {
        setRefreshing(true)
        // Recall video
        setRefreshing(false)
    }

    return (
        <SafeAreaView className="bg-primary h-full">
            <FlatList
                data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <Text className={"text-3xl text-white"}> {item.id}</Text>)
                }
                ListHeaderComponent={() => (
                    <View className={"my-6 px-4 space-y-6"}>
                        <View className="justify-between items-start mb-6 flex-row">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">Welcome Back</Text>
                                <Text className="text-2xl font-semibold text-white">Maitre Lelouch</Text>
                            </View>
                            <View className="mt-1.5">
                                <Image source={images.logoSmall} className="w-9 h-10" resizeMode='contain'></Image>
                            </View>
                        </View>
                        <SearchInput></SearchInput>

                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-gray-100 text-lg font-pregular mb-3">
                                Latest Videos
                            </Text>
                            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}></Trending>

                        </View>
                    </View>
                )}
                ListEmptyComponent={() =>
                (
                    <EmptyState title={"no video found"} subtitle="Be the first one to upload a video"></EmptyState>
                )
                }
                refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing}></RefreshControl>}
            />

        </SafeAreaView>
    )
}

export default Home