import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";

const MyButton = ({ text, alertText, name }) => {
  return (
    <>
      <TouchableOpacity onPress={() => alert(alertText)}>
        <View style={styles.container}>
          <Text style={styles.txtBtn}>{text}</Text>
          {/* {name === "google" && (
            <View
              style={{
                backgroundColor: "red",
                position: "absolute",
                marginHorizontal: 500
              }}
            >
              <Image
                source={require("../assets/g1.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
          )} */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 50,
    backgroundColor: "#B6B7BA",
    borderRadius: 8,
    alignItems: "center",
    //flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 15,
    marginTop: 15
  },
  txtBtn: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "500"
  }
});
