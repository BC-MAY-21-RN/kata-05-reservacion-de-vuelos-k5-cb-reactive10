import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookinScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onLongPress={() => navigation.goBack()} style={styles.txt}>
        BookinScreen
      </Text>
    </View>
  );
};

export default BookinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "tomato"
  }
});
