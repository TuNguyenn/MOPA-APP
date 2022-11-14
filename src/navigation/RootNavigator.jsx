import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import TopTabNavigator from './TabNavigator';
import DataBillDetail from '../screens/DataBillDetail';
import Test from '../screens/test';

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
      <Stack.Screen
        name="Xác thực thanh toán"
        component={DataBillDetail}
        options={{
          headerStyle: { backgroundColor: 'coral' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          headerStyle: { backgroundColor: 'coral' },
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
