import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesHelpers = StyleSheet.create({
  containerDelete: {
    backgroundColor: Colors.red,
    justifyContent: "center"
  },
  animatedText: {
    color: "white",
    paddingHorizontal: 19,
    fontWeight: "600",
    transform: [{ scale }]
  },
  containerUpdate: {
    backgroundColor: Colors.blue,
    justifyContent: "center"
  }
});
