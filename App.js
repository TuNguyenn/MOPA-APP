{/* <script src="http://localhost:8097"></script> */}
<script src="http://192.168.1.72:8097"></script>
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MainStackNavigator } from "./navigation/StackNavigator";
import TopTabNavigator from './navigation/TabNavigator';
import Header from './components/Header';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer children={{}}>
      <Header/>
      <TopTabNavigator/>
    </NavigationContainer>
  );
}