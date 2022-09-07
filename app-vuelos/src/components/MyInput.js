import { StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";

const MyInput = ({
  label,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  icons,
  showPassword,
  setshowPassword,
  error,
  onFocus = () => {}
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <Text style={styles.textEmailP}>{label}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={[
            styles.input,
            { borderColor: error ? Colors.red : isFocused ? Colors.blue : null }
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
        />
        {icons === "eye" && (
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            onPress={() => {
              setshowPassword(!showPassword);
            }}
            style={styles.icon}
            color={isFocused ? Colors.blue : Colors.grey}
          />
        )}
      </View>
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 8,
    alignSelf: "center",
    width: "100%",
    height: 50,
    borderWidth: 1.5,
    borderRadius: 5
  },
  icon: {
    fontSize: 22,
    position: "absolute",
    right: 10
    //color: Colors.grey
  },
  textEmailP: {
    fontSize: 17,
    marginTop: 25,
    marginBottom: 5
  }
});
