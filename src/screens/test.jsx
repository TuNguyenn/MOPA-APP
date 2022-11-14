import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DATA } from '../components/BuyComboData/HardData';
const Test = () => {
  return (
    <View style={styles.center}>
      {DATA.map((item) => {
        return item.data.map((data) => {
          return (
            <View>
              <Text>{data.capacity}</Text>
            </View>
          );
        });
      })}
      <Text>ádasdasd</Text>
    </View>
  );
};

export default Test;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
