import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";

export const stylesBookingScreen = StyleSheet.create({
  buttonStyle: {
    position: "absolute",
    bottom: 45,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignSelf: "center"
  },
  input: {
    marginTop: 80
  },
  title: {
    marginTop: 200,
    marginLeft: 25
  },
  container: {
    flex: 1
  },
  iconStyle: {
    marginTop: 40,
    marginLeft: 25
  }
});
