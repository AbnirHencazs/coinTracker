import React, { useState, useEffect } from 'react'
import { View, Image,Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinDetailScreen = ({route, navigation}) => {
    const [ coin, setCoin ] = useState({})
    const getSymbolIcon = (coinNameId) => {
        if (coinNameId){
            return `https://c1.coinlore.com/img/25x25/${coinNameId}.png`
        }
    }
    useEffect(() => {
        navigation.setOptions({title: coin.symbol})
        setCoin(route.params.coin)
    }, [coin])
    return(
        <View style={tw`flex-1 bg-blue-100`}>
            <View style={tw`flex flex-row items-center`}>
                <Image style={tw`h-8 w-8`} source={{ uri: getSymbolIcon(coin.nameid) }}/>
                <Text>{coin.name}</Text>
            </View>
        </View>
    )
}

export default CoinDetailScreen