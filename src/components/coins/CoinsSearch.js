import React from 'react'
import { TextInput, Platform, View  } from 'react-native'

const CoinsSearch = ({handleChange, query}) => {
    
    return(
            <View>
                <TextInput
                    onChangeText={handleChange}
                    value={query}
                    placeholder={"Search coin"}
                    placeholderTextColor="#fff"/>
            </View>
    )
}

export default CoinsSearch