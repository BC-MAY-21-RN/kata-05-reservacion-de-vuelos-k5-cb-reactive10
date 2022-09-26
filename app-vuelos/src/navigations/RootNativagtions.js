import React from "react";
//import Views
<<<<<<< HEAD
import LoginScreen from "./../views/LoginScreen";
import SignUp from "./../views/SignUp";
import HomePrueba from "./../views/Homeprueba"

=======
>>>>>>> master
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

const RootNativagtions = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator screenOptions={myConfigHeader}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePrueba" component={HomePrueba} />

      </Stack.Navigator>
    </NavigationContainer>
=======
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
>>>>>>> master
  );
};

export default RootNativagtions;
