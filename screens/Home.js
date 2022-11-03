import React, {useState} from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

const Home = ({navigation}) => {
  const [people, setPeople] = useState([
    { name: 'Day 1', id: '1' },
    { name: 'Day 2', id: '2' },
    { name: 'Day 3', id: '3' }
  ]);

  return (
    <View style={styles.container}>
      <Text>Task 1</Text>
      <FlatList
        numColumns={5}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
            <ListItem name={item.name} />
        )}
      />
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  }
});
