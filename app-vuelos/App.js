import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
//import { CheckBox } from 'react-native';
import { Colors } from "../app-vuelos/src/theme/Colors";
import LottieView from "lottie-react-native";
import MyInput from "./src/components/MyInput";

export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          color: "#5C6EF8",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 60
        }}
      >
        Sign Up
      </Text>

      <Text>Firts Name:</Text>
      <TextInput
        placeholder="Ingrese tu nombre"
        keyboardType="default"
        style={styles.input}
      />
      <Text>Email:</Text>
      <MyInput label={"Ingrese tu Email"} keyboardType="email-address" />
      <Text>Password:</Text>

      <MyInput label={"Ingresa tu Contraseña"} secureTextEntry />
      <Text>
        Use 8 or more characters with a mix of letters, numbers, and symbols
      </Text>
      <View>
        <Text>I agree to the Terms and Privacy Policy</Text>
        <Text>Subscribe for select prouct updates</Text>

        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
      </View>
      {/* <View>

      <LottieView
      loop
      autoPlay
      style={{
      width: 40,
      height: 40,
      position:'absolute',
      marginTop: 5,
      marginLeft: 150,
      }}
      source={require('./assets/login.json')}
    />
      </View> */}

      <TouchableOpacity onPress={() => alert("Press Btn Google")}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#B6B7BA",
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly"
          }}
        >
          <View style={{ marginLeft: -20 }}>
            <Image
              source={require("./src/assets/g1.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
          <Text
            style={{ color: Colors.white, fontSize: 20, fontWeight: "500" }}
          >
            Sign Up with Google
          </Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <TouchableOpacity onPress={() => alert("Press Btn Sing Up")}>
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "#B6B7BA",
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10
          }}
        >
          <Text
            style={{ color: Colors.white, fontSize: 20, fontWeight: "500" }}
          >
            Sing Up
          </Text>
        </View>
      </TouchableOpacity>

       <TouchableOpacity  style={{ marginTop:10, borderWidth: 1,
    borderColor: "thistle", height:40}}>


       </TouchableOpacity>
      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%"
    //backgroundColor: Colors.primary,
  },
  input: {
    paddingLeft: 8,
    alignSelf: "center",
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8
  }
});
