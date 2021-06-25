import React from 'react'
import { View, Text, FlatList, Pressable, ActivityIndicator } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import useCoins from '../../hooks/useCoins'
import CoinItem from './CoinItem'

const CoinsScreen = (props) => {
    const handleNav = () => {
        props.navigation.navigate('CoinDetail')
    }
    const handlePress = (coin) => {
        props.navigation.navigate('CoinDetail', { coin })
    }
    const coins = useCoins()
    return(
        <View style={tw`flex-1 items-center bg-blue-100 `}>
            <Text style={tw`font-bold text-xl font-bold py-2`}>Coins screen</Text>
            {
                !coins[0].length ?
                <ActivityIndicator color="#fff" size="large"/>
                :
                <FlatList
                    style={tw`w-10/12 bg-blue-200 shadow-lg rounded-lg px-4 py-2`}
                    data={coins[0]}
                    renderItem={({ item }) => 
                        <CoinItem
                            handlePress={() => { handlePress(item) }}
                            item={item}/>
                    }
                />
            }
        </View>
    )
}

export default CoinsScreen