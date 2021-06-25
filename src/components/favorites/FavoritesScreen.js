import React from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import FavoritesEmpty from './FavoritesEmpty'

const FavoritesScreen = ({favorites}) => {
    return(
        <View style={tw`flex-1 bg-gray-800`}>
            {
                favorites === undefined ?
                <FavoritesEmpty/>
                :<Text>Tienes favoritos</Text>
            }
        </View>
    )
}

export default FavoritesScreen