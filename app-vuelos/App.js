//imports system
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//imports user
import { Colors } from "../app-vuelos/src/theme/Colors";
import MyInput from "./src/components/MyInput";
import MyButton from "./src/components/MyButton";
import Title from "./src/components/Title";

export default function App() {
  //useStates
  const [isChecked, setChecked] = useState(false);
  const [isCheckedAux, setCheckedAux] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setshowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  ////
  const handleOnchange = (text, input) => {
    setInput((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Title titleContent={"Sign Up"} />
        <MyInput
          label={"Firts Name"}
          keyboardType="default"
          value={input.name}
          onChangeText={(text) => handleOnchange(text, "name")}
          //onChangeText={(e) => setInput({ ...input, name: e })}
          error={errors.name}
          onFocus={() => handleError(null, "name")}
        />
        <MyInput
          label={"Email *"}
          keyboardType="email-address"
          value={input.email}
          onChangeText={(text) => handleOnchange(text, "email")}
          //onChangeText={(e) => setInput({ ...input, email: e })}
          error={errors.email}
          onFocus={() => handleError(null, "email")}
        />
        <MyInput
          label={"Password *"}
          secureTextEntry={!showPassword}
          value={input.password}
          onChangeText={(text) => handleOnchange(text, "password")}
          //onChangeText={(e) => setInput({ ...input, password: e })}
          icons={"eye"}
          showPassword={showPassword}
          setshowPassword={setshowPassword}
          error={errors.password}
          onFocus={() => handleError(null, "password")}
        />

        <Text style={styles.txtPassw}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.blue : null}
          />
          <Text style={styles.textCheckBox}>
            I agree to the{" "}
            <Text style={{ textDecorationLine: "underline" }}>Terms</Text> and{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
            .<Text style={{ color: "tomato" }}>*</Text>
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={styles.checkbox}
            value={isCheckedAux}
            onValueChange={setCheckedAux}
            color={isCheckedAux ? Colors.blue : null}
          />
          <Text style={styles.textCheckBox}>
            Subscribe for select product updates.
          </Text>
        </View>

        <MyButton
          text={"Sign Up "}
          alertText={"Press Btn Sing Up"}
          name={"sing"}
        />

        <Text style={[styles.textCheckBox, { textAlign: "center" }]}>or</Text>

        <MyButton
          text={"Sign Up with Google"}
          alertText={"Press Btn Google"}
          name={"google"}
        />

        <Text style={[styles.textCheckBox, { textAlign: "center" }]}>
          Already have an account?{"  "}
          <Text
            style={{
              textDecorationLine: "underline",
              color: Colors.blue
            }}
          >
            Log in
          </Text>
        </Text>

        <StatusBar style={"dark"} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
    marginTop: 30
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

  textCheckBox: {
    fontSize: 17,
    color: Colors.grey,
    marginBottom: 13,
    paddingHorizontal: 6
  },
  txtPassw: {
    marginTop: 4,
    marginBottom: 15,
    color: Colors.grey,
    paddingBottom: 20
  }
});
