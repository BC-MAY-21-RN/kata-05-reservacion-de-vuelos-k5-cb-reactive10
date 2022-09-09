import Reactm,{useState} from "react";
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

const uri =
  "https://images.unsplash.com/photo-1527517928481-bcf8d6534de0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGF2aWFjaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

export default function LoginScreen() {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  
  const [errors, setErrors] = useState({});
  const [showPassword, setshowPassword] = useState(false);


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
      register();
    }
  };


    //functions
    const handleOnchange = (text, input) => {
      setInputs((prevState) => ({ ...prevState, [input]: text }));
    };
    const handleError = (error, input) => {
      setErrors((prevState) => ({ ...prevState, [input]: error }));
    };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <KeyboardAwareScrollView style={{ marginTop: 30, paddingTop: 30 }}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <BlurView intensity={70}>
            <View style={styles.login}>
              <LottieView
                autoPlay
                style={{
                  width: 200,
                  height: 170
                }}
                source={require("../../assets/flights.json")}
              />
              <View>
                <MyInput
                  borderColor="#fff"
                  label={"Email"}
                  keyboardType={"email-address"}
                  onChangeText={(text) => handleOnchange(text, "email")}
                  error={errors.email}
                  onFocus={() => handleError(null, "email")}
                />

                <MyInput
                  borderColor="#fff"
                  label={"Password"}
                  keyboardType={"keyboardType"}
                  secureTextEntry={true}
                  //backgroundColor={'#ffffff90'}
                  onChangeText={(text) => handleOnchange(text, "password")}
                  //onChangeText={(e) => setInput({ ...input, password: e })}
                  showPassword={showPassword}
                  setshowPassword={setshowPassword}
                  error={errors.password}
                  onFocus={() => handleError(null, "password")}
                />

                <MyButton
                  text={" Login "}
                  alertText={"Press Btn Sing Up"}
                  onPress={validate}

                />

                <MyButton
                  text={"Sign Up with Google "}
                  name={"google"}
                  onPress={() => console.log("handleCreateAccount")}
                />

                <MyButton
                  text={"Register "}
                  onPress={() => alert("Navigate Register")}
                />
              </View>
            </View>
          </BlurView>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#382E29",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 0.45
  },
  login: {
    width: "95%",
    height: 650,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    opacity: 0.8
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#382E29",
    borderWidth: 1,
    marginVertical: 30
  },
  input: {
    width: 250,
    height: 40,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ffffff90",
    marginBottom: 20
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: "#fff",
    borderWidth: 1
  }
});
