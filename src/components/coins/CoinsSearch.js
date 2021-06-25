import React from 'react'
import { TextInput, Platform, View  } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const CoinsSearch = ({handleChange, query}) => {
    
    
    return(
            <View style={tw`w-full items-center shadow-lg`}>
                <TextInput
                    style={tw`pl-4 w-full text-white rounded-lg border-2 border-gray-900`}
                    onChangeText={handleChange}
                    value={query}
                    placeholder={"Search coin"}
                    placeholderTextColor="#fff"/>
            </View>
    )
}

export default CoinsSearch