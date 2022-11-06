import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is homescreen</Text>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
