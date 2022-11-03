<script src="http://192.168.1.72:8097"></script>;
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  TextInput,
  Image,
  Platform,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DATA } from "../components/BuyComboData/HardData";
import { styles } from "../components/BuyComboData/Styles";

export default function ComboDataScreen() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [expand, setExpand] = useState(false);
  const [select, setSelect] = useState(DATA);
  // console.log("selectItem:", select);

  const handleOnPress = (content) => {
    const newItem = select.map((val) => {
      if (val.id === content.id) {
        return { ...val, selected: !val.selected };
      } else {
        return val;
      }
    });
    setSelect(newItem);
  };
  const renderItem = ({ item }) => {
    let items = [];
    if (item.content) {
      items = item.content.map((content) => {
        return (
          <TouchableOpacity
          onPress={() => handleOnPress(content)}
          style={
            !content.selected ? styles.wrapperItem : styles.wrapperItemPressed
          }
          >
            <Text style={styles.textItemTitle}>{content.titleContent}</Text>
            <Text style={styles.textItem}>{content.capacity}</Text>
            <Text style={styles.textItem}>{content.price}</Text>
          </TouchableOpacity>
        );
      });
    }

    return (
      <View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>{items}</View>
      </View>
    );
  };
  const inputPhoneNumber = (e) => {
    if (phoneNumber.length >= 10) {
      setExpand(true);
    } else if (phoneNumber.length < 10 || phoneNumber === null) {
      setExpand(false);
    }
  };

  return (
    <View style={styles.center}>
      <View style={styles.containerInput}>
        <Image
          style={styles.imageLogo}
          source={require("../assets/apple.png")}
        />
        <View style={styles.wrapperInput}>
          <Text style={styles.textLabel}>Nạp cho</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={(newPhoneNumber) => setPhoneNumber(newPhoneNumber)}
            onChange={(e) => setPhoneNumber(e.target.value)}
            keyboardType="numeric"
            returnKeyType={Platform.OS === "ios" ? "done" : "next"}
            placeholder="Nhập số điện thoại"
            onSubmitEditing={inputPhoneNumber}
          />

          <Image
            style={styles.imageInput}
            source={require("../assets/contact.png")}
          />
          {/* {phoneNumber ? (<Image
            style={styles.imageClearInput}
            source={require("../assets/remove.png")}
          />): null} */}
        </View>
      </View>
      {expand === true ? (
        <View>
          <FlatList
            style={styles.wrapperList}
            data={select}
            renderItem={renderItem}
          />

          <Pressable
            style={styles.button}
            title="Press me"
            // disabled
            onPress={() => Alert.alert("Cannot press this one")}
          >
            <Text style={styles.textButton}>Tiếp tục</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}
