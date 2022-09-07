import { StyleSheet, Text } from "react-native";
import React from "react";

const Title = ({ titleContent }) => {
  return <Text style={styles.title}>{titleContent}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: "#5C6EF8",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 13
  }
});
