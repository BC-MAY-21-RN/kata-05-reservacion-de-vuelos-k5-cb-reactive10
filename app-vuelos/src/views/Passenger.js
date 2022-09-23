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
    <View>
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
      <View>
        <TextBooking titleContent={"How many"} />
        <TextBooking titleContent={"passengers?"} />
      </View>
      <View>
        <SpinPickerPassagers />
      </View>
      <View>
        <MyButton
          text={"Next"}
          onPress={() => navigation.navigate("AbstracFligth")}
        />
      </View>
    </View>
  );
};

export default Passenger;

const styles = StyleSheet.create({});
