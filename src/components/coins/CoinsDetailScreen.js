import React, { useEffect } from 'react'
import { View, Image,Text, SectionList } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinDetailScreen = ({route, navigation}) => {
    const coin = route.params.coin
    const getSymbolIcon = (coinNameId) => {
        if (coinNameId){
            return `https://c1.coinlore.com/img/25x25/${coinNameId}.png`
        }
    }
    useEffect(() => {
        navigation.setOptions({title: coin.symbol})
    }, [])
    const getSections = (coin) => {
        const sections = [
            {
                title:"Market cap",
                data: [coin.market_cap_usd]
            },
            {
                title: "Volume 24h",
                data: [ coin.volume24 ]
            },
            {
                title: "Change 24h",
                data: [ coin.percent_change_24h ]
            }
        ]
        return sections
    }
    return(
        <View style={tw`flex-1 bg-gray-800`}>
            <View style={tw`flex flex-row items-center pl-2 py-3`}>
                <Image style={tw`h-8 w-8`} source={{ uri: getSymbolIcon(coin.nameid) }}/>
                <Text style={tw`text-white pl-2 text-lg font-bold`}>{coin.name}</Text>
            </View>
            <SectionList
                sections={getSections(coin)}
                keyExtractor={(item) => item}
                renderItem={ ({item}) => 
                    <View style={tw`py-2`}>
                        <Text style={tw`text-white pl-2`}>{item}</Text>
                    </View>
                }
                renderSectionHeader={ ({section}) => 
                    <View style={tw`bg-gray-900 py-2`}>
                        <Text style={tw`text-white pl-2 font-bold`}>{section.title}</Text>
                    </View>
                }/>
        </View>
    )
}

export default CoinDetailScreen