import { StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'
import {  Ionicons} from "@expo/vector-icons";


const MyInput = ({label, keyboardType,secureTextEntry,value, onChangeText,icons,showPassword,setshowPassword}) => {
  
  return (
    <View style={{flexDirection:'row',alignItems:"center" }}> 
    <TextInput
    placeholder={label}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    />
    {icons === "eye" &&
    <Ionicons name={  showPassword?"eye" :"eye-off" } 
            onPress={() => { setshowPassword(!showPassword) }}
            style={styles.icon}
          />
        }
           </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
  input:{
    paddingLeft:8,
    alignSelf:'center',
    width:'100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: Colors.black,
    borderRadius:5,
    //marginTop: 20,
  },
  icon:{
    fontSize:22,
    position:"absolute",
    right: 10,
    

  }
})
