import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import TopTabNavigator from "../navigation/TabNavigator";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>aaaaaaaa</Text>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
