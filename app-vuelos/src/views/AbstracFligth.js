import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ComponentListFlight from "./../components/ComponentListFlight";
import TextBooking from "./../components/TextBooking";
import MyButton from "./../components/MyButton";

import { useSelector } from "react-redux";

const AbstracFligth = () => {
  const stateApp = useSelector((state) => state.stateGlobal);
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
        <MyButton text={"Finish"} />
      </View>
    </View>
  );
};

export default AbstracFligth;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: -160,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    //marginTop: "100%",
    marginBottom: 30
  }
});
