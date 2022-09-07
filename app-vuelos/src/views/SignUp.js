//imports system
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { Text, SafeAreaView, View, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//imports theme and styles user
import { Colors } from "../theme/Colors";
import { stylesSignUp } from "./style/StyleSigUp";
//components User
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import Title from "../components/Title";

const SignUp = () => {
  //useStates
  const [isChecked, setChecked] = useState(false);
  const [isCheckedAux, setCheckedAux] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setshowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  ////////
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.name) {
      handleError("Please input fullname", "name");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("Min password length of 8", "password");
      isValid = false;
    }else if (!inputs.password.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid password", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        //navigation.navigate('LoginScreen');
        alert("GOOOO GOOOOOO!!!!");
      } catch (error) {
        alert("Error", "Something went wrong");
      }
    }, 1500);
  };
  ////////

  //functions
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={stylesSignUp.container}>
      <KeyboardAwareScrollView>
        <Title titleContent={"Sign Up"} />
        <MyInput
          label={"Firts Name"}
          keyboardType="default"
          //value={input.name}
          onChangeText={(text) => handleOnchange(text, "name")}
          //onChangeText={(e) => setInput({ ...input, name: e })}
          error={errors.name}
          onFocus={() => handleError(null, "name")}
        />
        <MyInput
          label={"Email *"}
          keyboardType="email-address"
          //value={input.email}
          onChangeText={(text) => handleOnchange(text, "email")}
          //onChangeText={(e) => setInput({ ...input, email: e })}
          error={errors.email}
          onFocus={() => handleError(null, "email")}
        />
        <MyInput
          label={"Password *"}
          secureTextEntry={!showPassword}
          //value={input.password}
          onChangeText={(text) => handleOnchange(text, "password")}
          //onChangeText={(e) => setInput({ ...input, password: e })}
          icons={"eye"}
          showPassword={showPassword}
          setshowPassword={setshowPassword}
          error={errors.password}
          onFocus={() => handleError(null, "password")}
        />

        <Text style={stylesSignUp.txtPassw}>
          Use 8 or more characters with a mix of letters, numbers, and symbols
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Checkbox
            style={stylesSignUp.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? Colors.blue : null}
          />
          <Text style={stylesSignUp.textCheckBox}>
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
            style={stylesSignUp.checkbox}
            value={isCheckedAux}
            onValueChange={setCheckedAux}
            color={isCheckedAux ? Colors.blue : null}
          />
          <Text style={stylesSignUp.textCheckBox}>
            Subscribe for select product updates.
          </Text>
        </View>

        <MyButton
          text={"Sign Up "}
          alertText={"Press Btn Sing Up"}
          name={"sing"}
          onPress={validate}
        />

        <Text style={[stylesSignUp.textCheckBox, { textAlign: "center" }]}>
          or
        </Text>

        <MyButton
          text={"Sign Up with Google"}
          alertText={"Press Btn Google"}
          name={"google"}
        />

        <Text
          style={[
            stylesSignUp.textCheckBox,
            { textAlign: "center", marginTop: 20 }
          ]}
        >
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
