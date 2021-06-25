import React, { useState, useEffect } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import useCoins from '../../hooks/useCoins'
import CoinItem from './CoinItem'
import CoinsSearch from './CoinsSearch'

const CoinsScreen = (props) => {
    const coins = useCoins()
    const [ query, setQuery ] = useState("")
    const [ filtered, setFiltered ] = useState([])
    const handlePress = (coin) => {
        props.navigation.navigate('CoinDetail', { coin })
    }
    const handleChange = (query) => {
        setQuery(query)
        const filtered = coins.filter( (coin) => {
            return coin.name.toLowerCase().includes( query.toLowerCase() ) || coin.symbol.toLowerCase().includes( query.toLowerCase() )
        } )
        setFiltered( filtered )
    }
    return(
        <View style={tw`flex-1 items-center bg-gray-800 `}>
            <CoinsSearch
                query={query}
                handleChange={handleChange}/>
            {
                !coins.length ?
                <ActivityIndicator color="#fff" size="large"/>
                :
                <FlatList
                    style={tw`w-full`}
                    data={ query.length ? filtered : coins}
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