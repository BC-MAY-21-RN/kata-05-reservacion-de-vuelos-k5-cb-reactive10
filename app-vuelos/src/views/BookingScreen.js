import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";

export default function BookingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconStyle}>
        <Ionicons name="chevron-back" size={29} color={Colors.blue}/>
      </View>
      <View style={styles.title}>
        <TextBooking titleContent={"Where are you"} />
        <TextBooking titleContent={"now?"} />
      </View>

      <View style={styles.input}>
        <MySelectLocation />
      </View>

      <View style={styles.buttonStyle}>
        <MyButton text={" Next "} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    position: "absolute",
    bottom: 45,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    marginTop: 80,
  },
  title: {
    marginTop: 200,
    marginLeft: 25,
  },
  container: {
    flex: 1,
  },
  iconStyle:{
    marginTop: 40,
    marginLeft: 25,
  }
});
