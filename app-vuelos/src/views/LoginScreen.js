import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
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
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAwareScrollView />
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <BlurView intensity={80}>
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
                label={'Email'}
                keyboardType={'email-address'}
              />

            </View>

            <View>
              <MyInput
                borderColor="#fff"
                label={'Password'}
                keyboardType={'keyboardType'}
                secureTextEntry={true}
              />
            </View>


            <MyButton 
             text={" Login "}
             alertText={"Press Btn Sing Up"}
             name={"sing"}
             onPress={() => console.log("handleSignIn")}

            /> 

            <MyButton 
             text={"Sign Up with Google "}
             alertText={"Press Btn Sing Up"}
             name={"sing"}
             onPress={() => console.log("handleCreateAccount")}

            
            />

            <Text
              style={{ alignSelf: "flex-end", color: "#ffffff90" }}
              onPress={() => alert("Navigate Register")}
            >
              Register
            </Text>
          </View>
        </BlurView>
      </ScrollView>
      <KeyboardAwareScrollView />
    </View>
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
    width: 350,
    height: 520,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
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