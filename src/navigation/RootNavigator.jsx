import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'


const Stack = createStackNavigator()

export default function RootNavigator() {
  return (
    <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOption={{headerShown: false}}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    </Stack.Navigator>
  )
}
