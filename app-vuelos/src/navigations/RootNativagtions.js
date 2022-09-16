import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Views
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";

const RootNativagtions = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootNativagtions;
