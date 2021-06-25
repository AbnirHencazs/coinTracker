import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoritesScreen from './FavoritesScreen'
import colors from '../../res/colors'
const Stack = createStackNavigator()

const FavoritesStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: colors.gray9},
                headerTitleAlign: 'center',
                headerTintColor: colors.white
            }}>
            <Stack.Screen component={FavoritesScreen} name={"Favorites"}/>
        </Stack.Navigator>
    )
}

export default FavoritesStack