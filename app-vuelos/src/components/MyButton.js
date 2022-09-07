//import system
import { Image, View, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
//imports user
import { Colors } from "../theme/Colors";
import { stylesMyButton } from "./style/StyleMyButton";

const MyButton = ({ text, alertText, name, onPress }) => {
  const [isPressColor, setIsPressColor] = useState(Colors.grey2);
  //funcion para cambiar el color
  const changeColorBtn = () => {
    let color = Colors.blue;
    setIsPressColor(color);
  };

  return (
    <>
      <TouchableOpacity onPress={onPress} onPressIn={changeColorBtn}>
        <View
          style={[stylesMyButton.container, { backgroundColor: isPressColor }]}
        >
          <Text style={stylesMyButton.txtBtn}>{text}</Text>
        </View>
        {name === "google" && (
          <View style={stylesMyButton.btnGoogle}>
            <Image
              source={require("../assets/g1.png")}
              style={stylesMyButton.dimensionBtnGoogle}
            />
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default MyButton;
