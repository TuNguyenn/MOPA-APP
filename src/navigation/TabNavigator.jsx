import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Contact from '../screens/Contact';
import ComboDataScreen from '../screens/ComboDataScreen';
import Like from '../screens/Like';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          textTransform: 'capitalize',
        },
        tabBarItemStyle: { width: 160, height: 62 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#E32426',
        tabBarInactiveTintColor: '#D9D9D9',
        tabBarIndicatorStyle: {
          borderBottomColor: '#E32426',
          borderBottomWidth: 2,
        },
      }}
    >
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Nạp Data" component={ComboDataScreen} />
      <Tab.Screen name="Like" component={Like} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
