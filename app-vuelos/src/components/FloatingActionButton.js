import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";

const FloatingActionButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.containerFAB}
      onPress={() => navigation.navigate("Booking")}
    >
      <Text style={styles.title}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  containerFAB: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    backgroundColor: Colors.blue,
    borderRadius: 70,
    width: 80,
    height: 80
  },
  title: {
    fontSize: 45,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center"
  }
});
