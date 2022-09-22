import { View, SafeAreaView } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import IconBack from "../components/IconBack";
import { useNavigation } from "@react-navigation/native";
import { stylesBookingScreen } from "./style/stylesBookingScreen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const BookingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={stylesBookingScreen.container}>
      <KeyboardAwareScrollView>
        <IconBack />
        <View style={stylesBookingScreen.title}>
          <TextBooking titleContent={"Where are you"} />
          <TextBooking titleContent={"now?"} />
        </View>
        <View style={stylesBookingScreen.input}>
          <MySelectLocation name={"initial"} />
        </View>
        <View>
          <View style={stylesBookingScreen.buttonStyle}>
            <MyButton
              text={" Next "}
              onPress={() => navigation.navigate("BookingDestinity")}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;
