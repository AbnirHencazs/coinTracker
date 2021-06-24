import React from 'react'
import { View, Text, FlatList, Pressable, ActivityIndicator } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import useCoins from '../../hooks/useCoins'
import CoinItem from './CoinItem'

const CoinsScreen = (props) => {
    const handlePress = () => {
        props.navigation.navigate('CoinDetail')
    }
    const coins = useCoins()
    return(
        <View style={tw`flex items-center h-full bg-gray-300 `}>
            <Text style={tw`font-bold text-xl font-bold py-2`}>Coins screen</Text>
            {
                !coins[0].length ?
                <ActivityIndicator color="#fff" size="large"/>
                :
                <FlatList
                    style={tw`w-10/12 bg-gray-400 rounded-lg px-4 py-2`}
                    data={coins[0]}
                    renderItem={({ item }) => 
                        <CoinItem
                            item={item}/>
                    }
                />
            }
            <Pressable onPress={ handlePress } style={tw`rounded flex justify-center my-2 w-10/12 bg-blue-500 py-2`}>
                <Text style={tw`text-base font-semibold text-white text-center`}>Ir al detalle</Text>
            </Pressable>
        </View>
    )
}

export default CoinsScreen