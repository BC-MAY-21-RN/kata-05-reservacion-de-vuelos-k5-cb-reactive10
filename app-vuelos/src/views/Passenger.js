import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconBack from "../components/IconBack";
import ComponentListFlight from "../components/ComponentListFlight";
import TextBooking from "../components/TextBooking";
import SpinPickerPassagers from "../components/SpinPickerPassagers";
import MyButton from "../components/MyButton";
import { useSelector } from "react-redux";

const Passenger = ({ navigation }) => {
  const routeInitial = useSelector(
    (state) => state.stateGlobal.chooseCodeIntial
  );
  const cityInitial = useSelector(
    (state) => state.stateGlobal.cityInitialChoose
  );
  const cityFinal = useSelector((state) => state.stateGlobal.cityFinalChoose);
  const routeFinal = useSelector((state) => state.stateGlobal.chooseCodeFinal);
  const fechaViaje = useSelector((state) => state.stateGlobal.fechaViaje);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <IconBack />
      </View>
      <View>
        <ComponentListFlight
          routeInitial={routeInitial}
          cityInitial={cityInitial}
          routeFinal={routeFinal}
          cityFinal={cityFinal}
          date={fechaViaje}
        />
      </View>
      <View style={{ marginLeft: 20, marginBottom: 20 }}>
        <TextBooking titleContent={"How many"} />
        <TextBooking titleContent={"passengers?"} />
      </View>
      <View>
        <SpinPickerPassagers />
      </View>
      <View style={styles.container}>
        <MyButton
          text={"Next"}
          onPress={() => navigation.navigate("AbstracFligth")}
        />
      </View>
    </View>
  );
};

export default Passenger;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    bottom: 45,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center",
    //marginTop: 200
    marginBottom: 30
  }
});
