import React from "react";
import {View, TextInput, StyleSheet } from "react-native";


export default function MySelectLocation() {
  return (
    <View style={styles.inputStyle}>
      <TextInput placeholder="Select Location" />
    </View>
  );
}

const styles = StyleSheet.create({
    inputStyle:{
    borderBottomWidth: 1,
    borderColor: 'black',
    width: '80%',
    alignSelf: 'center'
    }

})