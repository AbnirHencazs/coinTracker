import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinItem = ({item}) => {
    return(
        <View>
            <Text style={tw`text-left font-bold text-lg text-white`}>{item.name}</Text>
            <Text >{item.symbol}</Text>
        </View>
    )
}

export default CoinItem