import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TopTabNavigator from './TabNavigator';
import About from '../screens/About';

const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Nạp Data';

  switch (routeName) {
    case 'Contact':
      return 'Contact';
    case 'Nạp Data':
      return 'Nạp Data';
    case 'Like':
      return 'Like';
  }
}

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOption={{ headerShown: false }}>
      <Stack.Screen
        name="HomeScreen"
        component={TopTabNavigator}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerStyle: { backgroundColor: 'coral' },
          headerTintColor: '#fff',
          headerBackTitleVisible: true,
        })}
      />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
