import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ComponentListFlight from "./../components/ComponentListFlight";
import TextBooking from "./../components/TextBooking";
import MyButton from "./../components/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { handleColor } from "../redux/features/flightsSlice";

//firebase
import { db, auth } from "../firebase/auth-firebase";
import {
  where,
  collection,
  getDocs,
  Timestamp,
  query,
  addDoc
} from "firebase/firestore";

const AbstracFligth = ({ navigation }) => {
  const dispatch = useDispatch();
  const stateApp = useSelector((state) => state.stateGlobal);
  console.log("Estado Global Vuelos =>", stateApp);
  useEffect(() => {
    if (stateApp.passengers !== "" && stateApp.chooseCodeIntial !== "") {
      dispatch(handleColor(true));
    } else {
      dispatch(handleColor(false));
    }
  }, [stateApp.passengers]);

  const user = auth;
  // const docData = {
  //   routeInitial: "AXM",
  //   routeFinal: "BOG",
  //   cityInitial: "Armenia",
  //   cityFinal: "Bogotá",
  //   date: "Diciembre 23, 2020",
  //   passengers: 2,
  //   email: user.currentUser.email
  // };

  const docData = {
    routeInitial: stateApp.chooseCodeIntial,
    routeFinal: stateApp.chooseCodeFinal,
    cityInitial: stateApp.cityInitialChoose,
    cityFinal: stateApp.cityFinalChoose,
    date: stateApp.fechaViaje,
    passengers: stateApp.passengers,
    email: user.currentUser.email
  };
  async function addFlights() {
    //console.log("PRESS ADDFLIGTH");
    const response = await addDoc(collection(db, "flights"), docData);
    navigation.navigate("Fligths");
  }

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
          onPress={() => addFlights()}
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
