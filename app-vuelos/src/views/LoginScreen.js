import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Keyboard
} from "react-native";
import { BlurView } from "expo-blur";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import { stylesLogin } from "../views/style/StyleLogin";
import { useNavigation } from "@react-navigation/native";
//firebase
import { signInAcount } from "../firebase/auth-firebase";

const uri =
  "https://images.unsplash.com/photo-1527517928481-bcf8d6534de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2aWFjaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const [btnColor, setBtnColor] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setshowPassword] = useState(false);
  const [loginState, setLoginState] = useState(false);
  console.log("resultado de login", loginState);

  useEffect(() => {
    if (loginState) {
      navigation.navigate("HomePrueba");
    }
  }, [loginState]);
  

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("*Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("*Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("*Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError("*Min password length of 8", "password");
      isValid = false;
    } else if (
      !inputs.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      )
    ) {
      handleError("*Please input a valid password", "password");
      isValid = false;
    }

    if (isValid) {
      // register();
      signInAcount(inputs.email, inputs.password, setLoginState);
      alert("user Loggin");
    }
  };

  //functions
  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  useEffect(() => {
    if (inputs.email !== "" && inputs.password !== "") {
      setBtnColor(true);
    } else {
      setBtnColor(false);
    }
  }, [inputs.password]);

  return (
    <SafeAreaView style={stylesLogin.container}>
      <StatusBar style="light" />
      <Image
        source={{ uri }}
        style={[stylesLogin.image, StyleSheet.absoluteFill]}
      />
      <KeyboardAwareScrollView style={stylesLogin.keyboard}>
        <ScrollView contentContainerStyle={stylesLogin.contentContainer}>
          <BlurView intensity={70}>
            <View style={stylesLogin.login}>
              <LottieView
                autoPlay
                style={stylesLogin.lottieStyle}
                source={require("../../assets/flights.json")}
              />
              <View>
                <MyInput
                  label={"Email"}
                  keyboardType={"email-address"}
                  onChangeText={(text) => handleOnchange(text, "email")}
                  error={errors.email}
                  onFocus={() => handleError(null, "email")}
                />

                <MyInput
                  label={"Password"}
                  keyboardType={"keyboardType"}
                  secureTextEntry={true}
                  onChangeText={(text) => handleOnchange(text, "password")}
                  showPassword={showPassword}
                  setshowPassword={setshowPassword}
                  error={errors.password}
                  onFocus={() => handleError(null, "password")}
                />

                <View style={stylesLogin.viewStylesButtons}>
                  <MyButton
                    text={" Login "}
                    alertText={"Press Btn Sing Up"}
                    onPress={validate}
                    btnColor={btnColor}
                  />

                  <MyButton
                    text={"Sign Up with Google "}
                    name={"google"}
                    onPress={() => console.log("handleCreateAccount")}
                  />
                </View>

                <Text
                  onPress={() => navigation.navigate("SignUp")}
                  style={stylesLogin.textStyles}
                >
                  Register
                </Text>

                <Text
                  onPress={() => navigation.navigate("Fligths")}
                  style={stylesLogin.textStyles}
                >
                  MyFlights
                </Text>
              </View>
            </View>
          </BlurView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
