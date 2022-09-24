import { View, SafeAreaView } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import IconBack from "../components/IconBack";
import ComponentListFlight from "../components/ComponentListFlight";
import { useNavigation } from "@react-navigation/native";
import { StyleBookingDestinity } from "./style/StyleBookingDestinity";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";

export default function BookingScreen() {
  const navigation = useNavigation();
  const routeInitial = useSelector(
    (state) => state.stateGlobal.chooseCodeIntial
  );
  const cityInitial = useSelector(
    (state) => state.stateGlobal.cityInitialChoose
  );

  return (
    <SafeAreaView style={StyleBookingDestinity.container}>
      {/* <KeyboardAwareScrollView> */}
      <IconBack />
      <ComponentListFlight
        routeInitial={routeInitial}
        cityInitial={cityInitial}
      />
      <View style={StyleBookingDestinity.title}>
        <TextBooking titleContent={"Where will you be"} />
        <TextBooking titleContent={"flying to?"} />
      </View>

      <View style={StyleBookingDestinity.input}>
        <MySelectLocation />
      </View>
      {/* </KeyboardAwareScrollView> */}
      <View style={StyleBookingDestinity.buttonStyle}>
        <MyButton
          text={" Next "}
          onPress={() => navigation.navigate("Calendars")}
        />
      </View>
    </SafeAreaView>
  );
}
