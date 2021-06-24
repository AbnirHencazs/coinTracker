import React from 'react'
import { View, Text, Pressable } from 'react-native'
import tw from 'tailwind-react-native-classnames'
const CoinsScreen = (props) => {
    const handlePress = () => {
        props.navigation.navigate('CoinDetail')
    }
    return(
        <View style={tw`flex items-center h-full bg-gray-300 `}>
            <Text style={tw`font-bold text-xl font-bold py-2`}>Coins screen</Text>
            <Pressable onPress={ handlePress } style={tw`rounded flex justify-center mt-5 w-11/12 bg-blue-500 py-2`}>
                <Text style={tw`text-base font-semibold text-white text-center`}>Ir al detalle</Text>
            </Pressable>
        </View>
    )
}

export default CoinsScreen