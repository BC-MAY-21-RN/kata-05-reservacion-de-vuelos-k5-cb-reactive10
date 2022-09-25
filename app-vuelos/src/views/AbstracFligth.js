import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ComponentListFlight from "./../components/ComponentListFlight";
import TextBooking from "./../components/TextBooking";
import MyButton from "./../components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { handleColor } from "../redux/features/flightsSlice";

const AbstracFligth = () => {
  const dispatch = useDispatch();
  const stateApp = useSelector((state) => state.stateGlobal);

  useEffect(() => {
    if (stateApp.passengers !== "" && stateApp.chooseCodeIntial !== "") {
      dispatch(handleColor(true));
    } else {
      dispatch(handleColor(false));
    }
  }, [stateApp.passengers]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: "50%", width: "95%" }}>
        <ComponentListFlight
          routeInitial={stateApp.chooseCodeIntial}
          cityInitial={stateApp.cityInitialChoose}
          routeFinal={stateApp.chooseCodeFinal}
          cityFinal={stateApp.cityFinalChoose}
          date={stateApp.fechaViaje}
          passengers={stateApp.passengers}
        />
      </View>
      <View style={{ marginTop: 25, marginLeft: 25 }}>
        <TextBooking titleContent={"Your request"} />
        <TextBooking titleContent={"was received"} />
      </View>
      <View style={styles.container}>
        <MyButton
          text={"Finish"}
          onPress={() => alert("Finish")}
          btnColor={stateApp.colorBtn}
        />
      </View>
    </View>
  );
};

export default AbstracFligth;

const styles = StyleSheet.create({
  container: {
    bottom: -255,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center"
  }
});
