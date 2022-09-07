import { StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { stylesMyInput } from "./style/StyleMyInput";

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
      <Text style={stylesMyInput.textEmailP}>{label}</Text>
      <View style={stylesMyInput.container }>
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={[
            stylesMyInput.input,
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
            style={stylesMyInput.icon}
            color={isFocused ? Colors.blue : Colors.grey}
          />
        )}
      </View>
    </View>
  );
};

export default MyInput;
