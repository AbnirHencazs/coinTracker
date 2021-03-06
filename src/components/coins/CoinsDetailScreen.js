import React, { useEffect, useState } from 'react'
import { View, Image, Text, Pressable, SectionList, FlatList, ActivityIndicator, Alert } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import useMarkets from '../../hooks/useMarkets'
import Storage from '../../libs/storage'
import CoinMarketItem from './CoinMarketItem'

const CoinDetailScreen = ({route, navigation}) => {
    const coin = route.params.coin
    const [ isFavorite, setIsFavorite ] = useState(false)
    const markets = useMarkets(coin.id)
    const getSymbolIcon = (coinNameId) => {
        if (coinNameId){
            return `https://c1.coinlore.com/img/25x25/${coinNameId}.png`
        }
    }
    useEffect( async () => {
        navigation.setOptions({title: coin.symbol})
        getFavorite()
    }, [])
    const getSections = (coin) => {
        const sections = [
            {
                title:"Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [ coin.volume24 ]
            },
            {
                title: "Change 24h",
                data: [ coin.percent_change_24h ]
            }
        ]
        return sections
    }
    const addFavorite = async () => {
        const data = JSON.stringify(coin)
        const key = `favorite-${coin.id}`

        const stored = await Storage.instance.store(key, data)
        if(stored){
            setIsFavorite(true)
        }
    }
    const removeFavorite = () => {
        Alert.alert("Remove favorite", "Are you sure?", [
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            {
                text: "Remove",
                onPress: async () => {
                    const key = `favorite-${coin.id}`

                    const removed = await Storage.instance.remove(key)
                    if(removed){
            setIsFavorite(false)
        }
                },
                style: "destructive"
            }
        ])
    }

    const getFavorite = async () => {
        try {
            const key = `favorite-${coin.id}`

            const favStr = await Storage.instance.get(key)
            if( favStr !== null ){
                setIsFavorite(true)
            }
        } catch (error) {
            console.log("get favorite error", error)
        }
    }
    return(
        <View style={tw`flex-1 bg-gray-800`}>
            <View style={tw`flex flex-row items-center justify-between pl-2 py-3`}>
                <View style={tw`flex flex-row`}>
                    <Image style={tw`h-8 w-8`} source={{ uri: getSymbolIcon(coin.nameid) }}/>
                    <Text style={tw`text-white pl-2 text-lg font-bold`}>{coin.name}</Text>
                </View>
                <Pressable
                    onPress={isFavorite ? removeFavorite : addFavorite}
                    style={tw`px-4 py-2 rounded mr-2 ${isFavorite ? "bg-red-500": "bg-green-500"}`}>
                    <Text style={tw`text-white`}>{isFavorite ? "Remove Favorite" : "Add Favorite"}</Text>
                </Pressable>
            </View>
            <SectionList
            style={tw`max-h-52`}
                sections={getSections(coin)}
                keyExtractor={(item) => item}
                renderItem={ ({item}) => 
                    <View style={tw`py-2`}>
                        <Text style={tw`text-white pl-2`}>{item}</Text>
                    </View>
                }
                renderSectionHeader={ ({section}) => 
                    <View style={tw`bg-gray-900 py-2`}>
                        <Text style={tw`text-white pl-2 font-bold`}>{section.title}</Text>
                    </View>
                }/>
            <Text style={tw`text-lg font-bold text-white pl-2`}>Markets</Text>
            {
                markets.length ?
                <FlatList
                    style={tw`mt-2`}
                    data={markets}
                    keyExtractor={(item) => `${item.base}-${item.name}-${item.quote}`}
                    renderItem={({item}) => 
                        <CoinMarketItem
                            item={item}/>
                    }
                    horizontal={true}/>
                :<ActivityIndicator color="#fff" size="large" />
            }
        </View>
    )
}

export default CoinDetailScreen