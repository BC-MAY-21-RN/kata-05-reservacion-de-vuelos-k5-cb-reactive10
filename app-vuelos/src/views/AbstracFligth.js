import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ComponentListFlight from "./../components/ComponentListFlight";
import TextBooking from "./../components/TextBooking";
import MyButton from "./../components/MyButton";

const AbstracFligth = () => {
  return (
    <View>
      <View style={{ marginTop: "50%" }}>
        <ComponentListFlight />
      </View>
      <View style={{ marginTop: 25 }}>
        <TextBooking titleContent={"Your request"} />
        <TextBooking titleContent={"was received"} />
      </View>
      <View style={{ marginTop: 280 }}>
        <MyButton text={"Finish"} />
      </View>
    </View>
  );
};

export default AbstracFligth;

const styles = StyleSheet.create({});
