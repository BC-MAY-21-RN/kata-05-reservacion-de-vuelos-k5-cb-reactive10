import React, { useState } from "react";
import Checkbox from 'expo-checkbox';
import { StatusBar } from "expo-status-bar";
import {  Ionicons} from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Colors } from "../app-vuelos/src/theme/Colors";
import LottieView from "lottie-react-native";
import MyInput from "./src/components/MyInput";
import MyButton from "./src/components/MyButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function App() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [isCheckedAux, setCheckedAux] = useState(false);

  const [input, setInput] = useState({
    name:"",
    email:"",
    password:""
  })
  const [showPassword, setshowPassword] = useState(false)



  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            color: "#5C6EF8",
            fontWeight: "bold",
            fontSize: 25,
            marginTop: 60,
            marginBottom: 13,
          }}
        >
          Sign Up
        </Text>

        <Text style={styles.textEmailP}>Firts Name:</Text>
        <MyInput label={"Ingrese su nombre"} keyboardType="default"
         value ={input.name}
         onChangeText={(e)=>setInput({...input,name: (e)})} 
        />

        <Text style={styles.textEmailP}>Email *</Text>
        <MyInput label={"Ingrese tu Email"} keyboardType="email-address" 
         value={input.email}
         onChangeText={(e)=>setInput({...input,email: (e)})} />
        <Text style={styles.textEmailP}>Password *</Text>

        <MyInput label={"Ingresa tu Contraseña"} secureTextEntry={!showPassword}
        value={input.password}
        onChangeText={(e)=>setInput({...input,password: (e)})}
            icons={"eye"}
            showPassword={showPassword}
            setshowPassword={setshowPassword}
        />
        


        <Text style={{ marginTop: 4, marginBottom: 15, color: 'grey',paddingBottom:20 }}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.textCheckBox}>I agree to the Terms and Privacy Policy</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedAux}
            onValueChange={setCheckedAux}
            color={isCheckedAux ? '#4630EB' : undefined}
          />
          <Text style={styles.textCheckBox}>Subscribe for select prouct updates</Text>
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

       <MyButton  text={ "Sign Up " } 
    alertText ={"Press Btn Sing Up"}
    name={"sing"}
    />
        
        <Text style={{textAlign:"center"}}>
          or
        </Text>
     
      <MyButton  text={ "Sign Up with Google" } 
    alertText ={"Press Btn Google"}
    name={"google"}
    />
    
    <Text style={{textAlign:"center"}}>
          Already have an count? Long in
        </Text>

    <StatusBar style= {"auto"} />

    </SafeAreaView>
    </KeyboardAwareScrollView >
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
  },
  textEmailP: {
    fontSize: 17,
    marginTop: 25,
    marginBottom: 5,
  },

  textCheckBox: {
    fontSize: 17,
    color: 'grey',
    marginBottom: 13,
    paddingHorizontal: 6,
  }
});
