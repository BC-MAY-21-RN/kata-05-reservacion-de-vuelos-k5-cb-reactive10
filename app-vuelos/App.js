import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Image
} from "react-native";
import { Colors } from "../app-vuelos/src/theme/Colors";
import LottieView from "lottie-react-native";
import MyInput from "./src/components/MyInput";

export default function App() {
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

      <MyInput 
      label={'Ingresa tu Contraseña'}
      secureTextEntry
      />
      <Text>Use 8 or more characters with a mix of letters, numbers, and symbols</Text>
        <View>
          <Text>I agree to the Terms and Privacy Policy</Text>
          <Text>Subscribe for select prouct updates</Text>
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

      <View style={{width:'100%', height:50, backgroundColor:'#B6B7BA', borderRadius:8, alignItems:'center', flexDirection:'row'}}>
      <Image
        source={require('./src/assets/g1.png')}
        style={{width:50, height:50}}
        />
      </View>
      <Text>Sign Up with Google</Text>

      <StatusBar style="auto" />
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
