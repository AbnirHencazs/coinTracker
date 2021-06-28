import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import FavoritesEmpty from './FavoritesEmpty'
import Storage from '../../libs/storage'
import CoinItem from '../coins/CoinItem'

const FavoritesScreen = ({navigation}) => {

    const [ favorites, setFavorites ] = useState([])

    useEffect( () => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFavorites()
        })
        return unsubscribe
    }, [navigation] )

    const getFavorites = async () => {
        try {
            const allKeys = await Storage.instance.getKeys()
            const favKeys = allKeys.filter((key) => key.includes("favorite-"))
            const favs = await Storage.instance.list(favKeys)
            const favorites = favs.map( fav => JSON.parse( fav[1] ) )
            console.log(favorites)
            setFavorites(favorites)
        } catch (error) {
            console.error("get favorites error", error)
        }
    }
    const handlePress = (coin) => {
        navigation.navigate("CoinDetail", {coin})
    }
    return(
        <View style={tw`flex-1 bg-gray-800`}>
            {
                favorites.length ?
                <FlatList
                    data={favorites}
                    renderItem={({item}) =>
                        <CoinItem
                            item={item}
                            handlePress={ () => handlePress(item) }/>
                        }
                    />
                :
                <FavoritesEmpty/>
            }
        </View>
    )
}

export default FavoritesScreen