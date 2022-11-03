import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";

import {
  MainStackNavigator,
  ContactStackNavigator,
  ComboDataStackNavigator,
  LikeStackNavigator,
} from "./StackNavigator";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarItemStyle: { width: 160, height: 62, },
        tabBarStyle: { backgroundColor: "white" },
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#E32426",
        tabBarInactiveTintColor: "#D9D9D9",
        tabBarIndicatorStyle: {
          borderBottomColor: "#E32426",
          borderBottomWidth: 2,
        },
        
      }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen name="Nạp data" component={ComboDataStackNavigator} />
      <Tab.Screen name="Like" component={LikeStackNavigator} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
