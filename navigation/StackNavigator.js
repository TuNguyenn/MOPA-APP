import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ComboDataScreen from "../screens/ComboDataScreen";
import Like from "../screens/Like";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerShown: false,
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Contact" component={Contact} />
       
      </Stack.Navigator>
    );
  }
const ComboDataStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="ComboDataScreen" component={ComboDataScreen} />
       
      </Stack.Navigator>
    );
  }
const LikeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
         <Stack.Screen name="Nạp data" component={Like} />
       
      </Stack.Navigator>
    );
  }
 

export { MainStackNavigator, ContactStackNavigator, ComboDataStackNavigator, LikeStackNavigator };
