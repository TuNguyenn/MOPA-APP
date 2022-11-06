import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <AntDesign name="left" size={24} color="white" />
      <Text style={styles.title}>Nạp data</Text>
      <Text style={styles.titleLeft}>Lịch sử</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    height: 76,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 14,
    backgroundColor: "coral",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleLeft: {
    color: "#fff",
    fontSize: 15,
  },
});

export default Header;
