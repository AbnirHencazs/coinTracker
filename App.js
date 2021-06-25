/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CoinsStack from './src/components/coins/CoinsStack';
import FavoritesStack from './src/components/favorites/FavoritesStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'tailwind-react-native-classnames'
const Tabs = createBottomTabNavigator()
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style: tw`bg-gray-900`
        }}>
        <Tabs.Screen
          component={CoinsStack}
          name="Coins"
          options={{
            tabBarIcon: ({color, size}) => {
              return <Image style={{ tintColor: color, width: size, height: size }} source={require('./src/assets/bank.png')} />
            }
          }}/>
        <Tabs.Screen
          component={FavoritesStack}
          name="Favorites"
          options={{
            tabBarIcon: ({color, size}) => {
              return <Image style={{tintColor: color, width: size, height: size}} source={require('./src/assets/star.png')}/>
            }
          }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
