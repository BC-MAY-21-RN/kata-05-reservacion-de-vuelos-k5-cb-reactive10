import { StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../theme/Colors";

const Title = ({ titleContent }) => {
  return <Text style={styles.title}>{titleContent}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.blue,
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 13
  }
});
