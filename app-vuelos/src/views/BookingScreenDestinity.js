import { View, SafeAreaView } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import IconBack from "../components/IconBack";
import ComponentListFlight from "../components/ComponentListFlight";
import { useNavigation } from "@react-navigation/native";
import { stylesBookingScreen } from "./style/stylesBookingScreen";
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
    <SafeAreaView style={stylesBookingScreen.container}>
      <KeyboardAwareScrollView>
        <IconBack />
        <ComponentListFlight
          routeInitial={routeInitial}
          cityInitial={cityInitial}
        />
        <View style={stylesBookingScreen.title}>
          <TextBooking titleContent={"Where will you be"} />
          <TextBooking titleContent={"flying to?"} />
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
