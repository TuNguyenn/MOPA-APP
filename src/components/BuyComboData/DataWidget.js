import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { styles } from "./Styles";

const DataWidget = ({ id, title, capacity, price, selected }) => {
  return (
    <FlatList
      data={{ title, capacity, price }}
      renderItem={({ item }) => {
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <TouchableOpacity>
            <View style={styles.wrapperItem}>
              <Text style={styles.textItemTitle}>{item.title}</Text>
              <Text style={styles.textItem}>{item.capacity}</Text>
              <Text style={styles.textItem}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </View>;
      }}
    />
  );
};

export default DataWidget;
