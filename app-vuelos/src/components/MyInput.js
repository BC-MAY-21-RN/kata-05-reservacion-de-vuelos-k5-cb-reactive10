import { StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'

const MyInput = ({label, keyboardType,secureTextEntry}) => {
  return (
    <TextInput
    placeholder={label}
    keyboardType={keyboardType}
    secureTextEntry={secureTextEntry}
    style={styles.input}
    />
  )
}

export default MyInput

const styles = StyleSheet.create({
  input:{
    paddingLeft:8,
    alignSelf:'center',
    width:'100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius:8,
  },
})
