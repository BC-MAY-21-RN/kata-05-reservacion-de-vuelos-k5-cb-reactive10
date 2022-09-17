import { Text, View } from "react-native";
import React from "react";
import { stylesBoking } from "./style/StyleBooking";

const BookinScreen = ({ navigation }) => {
  return (
    <View style={stylesBoking.container}>
      <Text onLongPress={() => navigation.goBack()} style={stylesBoking.txt}>
        BookinScreen
      </Text>
    </View>
  );
};

export default BookinScreen;
