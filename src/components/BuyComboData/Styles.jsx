import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  center: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#D9D9D9",
  },
  containerInput: {
    width: "100%",
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#fff",
    height: 89,
    alignItems: "center",
    marginBottom: 15,
  },
  wrapperInput: {
    width: "90%",
    paddingTop: 20,
    paddingLeft: 5,
  },
  imageInput: {
    posistion: "relative",
    left: 260,
    bottom: 35,
    width: 25,
    height: 25,
  },
  imageClearInput: {
    posistion: "relative",
    left: 240,
    bottom: 53,
    width: 15,
    height: 15,
  },
  imageLogo: {
    posistion: "relative",
    top: 5,
    width: 50,
    height: 50,
  },
  input: {
    width: "90%",
    borderBottomWidth: 2,
    borderColor: "#D9D9D9",
    padding: 10,
  },
  textLabel: {
    posistion: "relative",
    left: 10,
    top: 10,
    height: 20,
    fontSize: 15,
    color: "#6c6a6a",
  },
  // button: {
  //   backgroundColor: "#e30c0c",
  //   height: 50,
  //   borderWidth: 1
  // },
  wrapperList: {
    paddingTop: 10,
    paddingLeft: 12,
    backgroundColor: "#fff",
    height: 340,
  },
  containerItem:{
    flexDirection: 'row', 
    flexWrap: 'wrap'
  },
  wrapperItem: {
    width: 110,
    height: 110,
    paddingTop: 20,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#949494",
    borderRadius: 5,
  },

  textItem: {
    textAlign: "center",
    color: "#949494",
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 10,
  },
  // opacity:{
  //   borderColor: 'coral'
  // },
  textItemTitle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  button: {
    margin: 15,
    backgroundColor: "#d4d2d2",
    height: 55,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "600",
    color: "#838383",
    alignSelf: "center",
    padding: 15,
  },
  wrapperItemPressed: {
    width: 110,
    height: 110,
    paddingTop: 20,
    marginRight: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "coral",
    borderRadius: 5,
    zIndex: 1
  },
  textItemTitlePressed: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
    color: "coral",
  },
  textItemPressed: {
    textAlign: "center",
    color: "coral",
    fontSize: 14,
  },
  buttonPressed: {
    margin: 15,
    backgroundColor: "coral",
    height: 55,
    borderRadius: 5,
  },
  textButtonPressed: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    alignSelf: "center",
    padding: 15,
  },
});
