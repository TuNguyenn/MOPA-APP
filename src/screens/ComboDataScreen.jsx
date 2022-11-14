<script src="http://192.168.1.72:8097"></script>;
import React, { useState } from 'react';
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
} from 'react-native';
import { DATA } from '../components/BuyComboData/HardData';
import { styles } from '../components/BuyComboData/Styles';

export default function ComboDataScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(null);
  const [getData, setGetData] = useState(null);

  const handleOnPress = (id) => {
    if (selected === id) {
      return setSelected(null);
    } else {
      return setSelected(id);
    }
  };

  const renderItem = ({ item }) => {
    let items = [];
    if (item.data) {
      items = item.data.map((data) => {
        // console.log('%cComboDataScreen.jsx line:34 data.id', 'color: #007acc;', data.id);
        return (
          <TouchableOpacity onPress={() => handleOnPress(data.id)}>
            <View style={data.id === selected ? styles.wrapperItemPressed : styles.wrapperItem}>
              <Text
                style={data.id === selected ? styles.textItemTitlePressed : styles.textItemTitle}
              >
                {data.titleContent}
              </Text>
              <Text style={data.id === selected ? styles.textItemPressed : styles.textItem}>
                {data.capacity}
              </Text>
              <Text style={data.id === selected ? styles.textItemPressed : styles.textItem}>
                {data.priceText}
              </Text>
            </View>
          </TouchableOpacity>
        );
      });
    }

    return (
      <View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{items}</View>
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
        <Image style={styles.imageLogo} source={require('../../assets/apple.png')} />
        <View style={styles.wrapperInput}>
          <Text style={styles.textLabel}>Nạp cho</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={(newPhoneNumber) => setPhoneNumber(newPhoneNumber)}
            onChange={(e) => setPhoneNumber(e.target.value)}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
            placeholder="Nhập số điện thoại"
            onSubmitEditing={inputPhoneNumber}
          />

          <Image style={styles.imageInput} source={require('../../assets/contact.png')} />
          {/* {phoneNumber ? (<Image
            style={styles.imageClearInput}
            source={require("../assets/remove.png")}
          />): null} */}
        </View>
      </View>
      {expand === true ? (
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            style={styles.wrapperList}
            data={DATA}
            renderItem={renderItem}
          />

          <Pressable
            style={selected ? styles.buttonPressed : styles.button}
            title="Press me"
            onPress={
              selected
                ? () => navigation.navigate('Xác thực thanh toán', { selected, DATA, phoneNumber })
                : null
            }
          >
            <Text style={selected ? styles.textButtonPressed : styles.textButton}>Tiếp tục</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
}
