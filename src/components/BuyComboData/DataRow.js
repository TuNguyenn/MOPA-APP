import { View, Text, ScrollView } from "react-native";
import React from "react";
import { DATA } from "./HardData";
import DataWidget from "./DataWidget";

const DataRow = ({ id, title }) => {
  return (
    <View>
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <View>
          {DATA.map((data) => {
            return data.data.map((val) => {
              return (
                <DataWidget
                  id={val.id}
                  title={val.titleContent}
                  capacity={val.capacity}
                  price={val.price}
                  selected={val.selected}
                />
              );
            });
          })}
        </View>
      </View>
    </View>
  );
};

export default DataRow;
