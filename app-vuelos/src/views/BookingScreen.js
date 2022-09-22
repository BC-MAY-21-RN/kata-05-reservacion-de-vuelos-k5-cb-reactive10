import { View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../theme/Colors";
import { useNavigation } from "@react-navigation/native";
import { stylesBookingScreen } from "./style/stylesBookingScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function BookingScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={stylesBookingScreen.container}>
      <KeyboardAwareScrollView>
        <View style={stylesBookingScreen.iconStyle}>
          <Ionicons
            name="chevron-back"
            size={29}
            color={Colors.blue}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={stylesBookingScreen.title}>
          <TextBooking titleContent={"Where are you"} />
          <TextBooking titleContent={"now?"} />
        </View>

        <View style={stylesBookingScreen.input}>
          <MySelectLocation />
        </View>
        <View>
          <View style={stylesBookingScreen.buttonStyle}>
            <MyButton
              text={" Next "}
              onPress={() => navigation.navigate("Calendars")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
