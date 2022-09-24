import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useState } from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import { Colors } from "../theme/Colors";

import { AntDesign } from "@expo/vector-icons";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { stylesLogin } from "../views/style/StyleLogin";
import { useDispatch, useSelector } from "react-redux";
import ComponentListFlight from "../components/ComponentListFlight";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { handlFechaViaje } from "../redux/features/flightsSlice";
import IconBack from "../components/IconBack";

export default function CalendarScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const routeInitial = useSelector(
    (state) => state.stateGlobal.chooseCodeIntial
  );
  const cityInitial = useSelector(
    (state) => state.stateGlobal.cityInitialChoose
  );
  const cityFinal = useSelector((state) => state.stateGlobal.cityFinalChoose);
  const routeFinal = useSelector((state) => state.stateGlobal.chooseCodeFinal);

  const [day, setDay] = useState("");
  // se guarda el dia seleccionadooooo

  let renderArrow = (direction) => {
    if (direction === "left") {
      return <AntDesign name="left" size={24} color={Colors.blue} />;
    } else {
      return <AntDesign name="right" size={24} color={Colors.blue} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30, width: "98%" }}>
        <IconBack />
        <ComponentListFlight
          routeInitial={routeInitial}
          cityInitial={cityInitial}
          routeFinal={routeFinal}
          cityFinal={cityFinal}
        />
      </View>
      <View style={{ marginLeft: 10, marginBottom: 20 }}>
        <TextBooking titleContent={"Select date"} />
      </View>
      <Calendar
        style={{
          height: "55%",
          borderColor: "gray"
        }}
        theme={{
          textDayFontSize: 16,
          textMonthFontSize: 26,
          textMonthFontWeight: "500"
        }}
        onDayPress={(day) => {
          setDay(moment(day).subtract(1, "M").format("YYYY-MM-DD"));
          dispatch(
            handlFechaViaje(
              moment(day).subtract(1, "M").format("MMMM D, YYYY ")
            )
          );
        }}
        renderArrow={renderArrow}
        disableAllTouchEventsForDisabledDays={true}
        markingType={"custom"}
        markedDates={{
          [day]: {
            customStyles: {
              container: {
                backgroundColor: "#7A76D1",
                height: 33,
                width: 33
              },
              text: {
                color: "white",
                fontWeight: "bold"
              }
            }
          }
        }}
      />
      <MyButton
        text={"Next"}
        onPress={() => navigation.navigate("Passenger")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
