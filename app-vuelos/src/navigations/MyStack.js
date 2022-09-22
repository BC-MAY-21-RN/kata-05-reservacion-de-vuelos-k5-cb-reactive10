import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Views
import LoginScreen from "../views/LoginScreen";
import SignUp from "../views/SignUp";
import MyFlights from "../views/MyFlights";
import BookingScreen from "../views/BookingScreen";
import BookingScreenDestinity from "../views/BookingScreenDestinity";
import CalendarScreen from "../views/CalendarsScreen";

//configStack
import { myConfigHeader } from "../utils/helpers";

//Creamos el stack
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={myConfigHeader}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Fligths" component={MyFlights} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen
        name="BookingDestinity"
        component={BookingScreenDestinity}
      />
      <Stack.Screen name="Calendars" component={CalendarScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;
