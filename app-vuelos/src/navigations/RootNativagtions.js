import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Views
import LoginScreen from "./../views/LoginScreen";
import SignUp from "./../views/SignUp";
import { NavigationContainer } from "@react-navigation/native";

//Creamos el stack
const Stack = createNativeStackNavigator();

const myConfigHeader = {
  headerShown: false
};

const RootNativagtions = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={myConfigHeader}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNativagtions;
