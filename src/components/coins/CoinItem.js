import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinItem = ({item}) => {
    return(
        <View style={tw`flex flex-row items-center justify-between border-b-2 border-blue-100 py-2`}>
            <View>
                <Text style={tw`text-left font-bold text-lg text-gray-500`}>{item.name}</Text>
                <Text >{item.symbol}</Text>
            </View>
            <Text style={tw`font-bold`}>${item.price_usd}</Text>
        </View>
    )
}

export default CoinItem