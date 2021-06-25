import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinMarketItem = ({item }) => {
    return(
        <View style={tw`flex max-h-20 w-20 items-center bg-gray-900 rounded border-2 border-white mx-2 px-2`}>
            <Text style={tw`text-xs text-white mt-2 font-bold`}>{item.name}</Text>
            <Text style={tw`text-xs text-white`}>{item.price_usd}</Text>
        </View>
    )
}

export default CoinMarketItem