import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const FavoritesEmpty = () => {
    return(
        <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-xl text-white font-bold`}>You don't have any favorites right now</Text>
        </View>
    )
}

export default FavoritesEmpty