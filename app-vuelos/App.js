import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, SafeAreaView, View, Platform, Image } from 'react-native';
import { Colors } from '../app-vuelos/src/theme/Colors'
import LottieView from 'lottie-react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color:'#5C6EF8', fontWeight:'bold', fontSize:20, marginTop: 60}}>Sign Up</Text>
      
      <Text >Firts Name:</Text>
      <TextInput
      placeholder='Ingrese tu nombre'
      keyboardType='default'
      style={styles.input}
      />
            <Text >Email:</Text>
      <TextInput
      placeholder='Ingrese tu nombre'
      keyboardType='email-address'
      style={styles.input}
      ke
      />
            <Text >Password:</Text>
      <TextInput
      placeholder='Ingrese tu nombre'
      keyboardType='default'
      style={styles.input}
      secureTextEntry={true}
      />
      <View>
        <Image
        source={require('./src/assets/g1.png')}
        style={{width:50, height:50}}
        />
      <LottieView
      loop
      autoPlay
      style={{
      width: 40,
      height: 40,
      position:'absolute',
      marginTop: 5,
      marginLeft: 150,
      }}
      source={require('./assets/login.json')}
    />
      </View>
    
      
      
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf:'center',
    width:'90%',
    backgroundColor: Colors.primary,
  },
  input:{
    paddingLeft:8,
    alignSelf:'center',
    width:'100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius:8,
  },

});
