import { Animated, TouchableOpacity } from "react-native";
import { Colors } from "../theme/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesHelpers } from "./style/StyleHelper";

//function SwipeRight
export const swipeRightActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [0.7, 0]
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => alert("Delete Fligth")}
        style={stylesHelpers.containerDelete}
      >
        <Animated.Text style={[stylesHelpers.animatedText, { transform: [{ scale }]}]}>
          <MaterialIcons name="delete-sweep" size={24} color={Colors.white} />
        </Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Update Fligth")}
        style={stylesHelpers.containerUpdate}
      >
        <Animated.Text style={[stylesHelpers.animatedText, { transform: [{ scale }]}]}>
          <MaterialIcons name="edit" size={24} color={Colors.white} />
        </Animated.Text>
      </TouchableOpacity>
    </>
  );
};
//

//Config Header Stack

export const myConfigHeader = {
  headerShown: false
};

//
