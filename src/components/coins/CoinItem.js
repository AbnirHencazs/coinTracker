import React from 'react'
import { View, Text, Pressable } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinItem = ({item, handlePress}) => {
    return(
        <Pressable
            style={tw`flex flex-row items-center justify-between border-b-2 border-white py-2 px-4`}
            onPress={handlePress}>
            <View style={tw`flex flex-row items-center`}>
                <Text style={tw`text-left font-bold text-lg text-white`}>{item.symbol}</Text>
                <Text style={tw`text-sm font-light pl-2 text-white`}>{item.name}</Text>
                <Text style={tw`font-semibold pl-5 text-white`}>${item.price_usd} USD</Text>
            </View>
            <View>
                <Text style={tw` ${item.percent_change_1h < 0 ? "text-red-500": "text-green-500"}`}>{item.percent_change_1h}</Text>
            </View>
        </Pressable>
    )
}

export default CoinItem