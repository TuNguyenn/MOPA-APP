import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Divider } from 'react-native-paper';

const DataBillDetail = ({ route }) => {
  const { selected, DATA, phoneNumber } = route.params;

  console.log('%cDataBillDetail.jsx line:8 object', 'color: #007acc;', selected);
  return (
    <View style={styles.center}>
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => {
          let items = [];
          if (item.data) {
            items = item.data.map((data) => {
              console.log(route.params.id);
              return (
                <View style={styles.center}>
                <Text>{data.capacity}</Text>
                </View>
              );
            });
          }r
        }}
      /> */}
      {/* {route.params.data.map((item) => {
        item.data.map((data) => {
          // console.log(data.id === route.params.id);
          return (
            <View style={styles.center}>
              <Text>{data.titleContent}</Text>
            </View>
          );
        });
      })} */}
      <View>
        <Text style={styles.textTitlePage}>Chi tiết giao dịch</Text>
      </View>
      <Divider style={{ marginBottom: 10 }} />
      <View>
        {DATA.map((item) => {
          return item.data.map((data) => {
            return (
              <View>
                {data.id === selected ? (
                  <View>
                    <View style={styles.contentContainer}>
                      <Text>Nạp cho</Text>
                      <Text style={styles.textPhoneNumber}>{phoneNumber}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                      <Text>Nhà mạng</Text>
                      <Text>Viettel</Text>
                    </View>
                    <View style={styles.contentContainer}>
                      <Text>Tên gói</Text>
                      <Text>{data.titleContent}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                      <Text>Dung lượng</Text>
                      <Text>{data.capacity}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                      <Text>Mệnh giá</Text>
                      <Text>{data.priceNumber}</Text>
                    </View>
                    <View style={styles.contentContainer}>
                      <Text>Chiết khấu</Text>
                      <Text>20%</Text>
                    </View>
                    <View style={styles.contentContainer}>
                      <Text>Số lượng</Text>
                      <Text>1</Text>
                    </View>
                    <Divider style={{ marginVertical: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>Phí giao dịch</Text>
                      <Text>Miễn phí</Text>
                    </View>
                    <Divider style={{ marginVertical: 20 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.textTotal}>Tổng cộng:</Text>
                      <Text>{data.priceNumber - (data.priceNumber * 20) / 100}</Text>
                    </View>
                  </View>
                ) : null}
              </View>
            );
          });
        })}
        <Pressable
          style={styles.buttonPressed}
          title="Press me"
          // onPress={
          //   selected
          //     ? () => navigation.navigate('Xác thực thanh toán', { selected, DATA, phoneNumber })
          //     : null
          // }
        >
          <Text style={styles.textButtonPressed}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlign: 'center',
    padding: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  textPhoneNumber: {
    color: 'coral',
  },
  textTitlePage: {
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 15,
  },
  textTotal: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonPressed: {
    marginHorizontal: 15,
    marginTop: 40,
    backgroundColor: 'coral',
    height: 55,
    borderRadius: 5,
  },
  textButtonPressed: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    alignSelf: 'center',
    padding: 15,
  },
});

export default DataBillDetail;
