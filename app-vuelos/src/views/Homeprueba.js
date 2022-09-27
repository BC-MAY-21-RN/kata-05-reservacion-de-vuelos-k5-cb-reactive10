import React, { useState, useEffect } from "react";
import { Text, SafeAreaView } from "react-native";

import { stylesLogin } from "./style/StyleLogin";

import {
  where,
  collection,
  getDocs,
  Timestamp,
  query,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase/auth-firebase";

const HomePrueba = () => {
  const [data, setData] = useState({});
  //console.log("datos", data[0].data.llegada);

  const user = auth;
  console.log("user", user);

  // console.log("correo", user.currentUser?.email);

  useEffect(() => {
    getCities();
    //addFlights()
    // getCountries()
  }, []);

  // async function getCountries() {
  // const allCountries = (collection(db, "countries"));
  // const queryCountries = await getDocs(allCountries);

  // let countriesData =[]

  // queryCountries.forEach((doc) => {
  // countriesData.push({id:doc.id,data: doc.data()});
  // });
  // console.log(countriesData[0].data.countries)

  //push }

  async function getCities() {
    const flights = query(
      collection(db, "flights"),
      where("email", "==", `${user.currentUser.email}`)
    );
    const queryFlights = await getDocs(flights);

    let flightData = [];

    queryFlights.forEach((doc) => {
      flightData.push({ id: doc.id, data: doc.data() });
    });
    console.log("Hola: ", flightData);

    setData(flightData);
  }

  // --------------- ADD DATA ----------------//
  const docData = {
    llegada: { pais: "Texas", codigo: "USA" },
    origen: { pais: "Mexico", codigo: "MEX" },

    pasajeros: 3,
    fecha: Timestamp.fromDate(new Date("December 2, 2022")),
    email: user.currentUser.email,
  };
  async function addFlights() {
    await addDoc(collection(db, "flights"), docData);
  }
  //----------------------------------------------//

  return (
    <SafeAreaView style={stylesLogin.container}>
      <Text style={{ color: "white", fontSize: 50 }}>
        {user.currentUser?.email}
      </Text>
      <Text style={{ color: "white", fontSize: 50 }}>
        {data[0].data.llegada.pais}
      </Text>
    </SafeAreaView>
  );
};

export default HomePrueba;
