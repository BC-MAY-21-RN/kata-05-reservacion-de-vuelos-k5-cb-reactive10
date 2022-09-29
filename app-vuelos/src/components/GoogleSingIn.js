import React from "react";
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Button } from "react-native";


WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton () {
  return(
    <Button/>
  )
}

//lucas puedes hacer commit y yo lo termino de revisar estos no dejan la sala
