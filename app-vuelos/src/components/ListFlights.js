import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Colors } from "../theme/Colors";
import { MaterialIcons } from "@expo/vector-icons";

const ListFlights = ({ data }) => {
  const { cityInitial, cityFinal, routeInitial, routeFinal, passengers, date } =
    data;
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={swipeRightActions}>
        <View style={styles.citysCode}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            {routeInitial}
          </Text>
          <MaterialIcons
            name="flight"
            size={24}
            color={Colors.blue}
            style={{
              transform: [{ rotate: "90deg" }],
              alignSelf: "center",
              position: "absolute",
              marginLeft: 160
            }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>{routeFinal}</Text>
        </View>
        <View style={styles.citys}>
          <Text style={{ fontSize: 12, color: Colors.grey }}>
            {cityInitial}
          </Text>
          <Text style={{ fontSize: 12, color: Colors.grey, paddingBottom: 5 }}>
            {cityFinal}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={{ fontSize: 12, color: Colors.black }}>{date}</Text>
          <Text
            style={{
              fontSize: 12,
              color: Colors.black,
              paddingBottom: 18
            }}
          >
            {`${passengers} Passengers`}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListFlights;

//function SwipeRight

const swipeRightActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [0.7, 0]
  });
  return (
    <>
      <TouchableOpacity
        onPress={() => alert("Delete Fligth")}
        style={{ backgroundColor: "tomato", justifyContent: "center" }}
      >
        <Animated.Text
          style={{
            color: "white",
            paddingHorizontal: 19,
            fontWeight: "600",
            transform: [{ scale }]
          }}
        >
          <MaterialIcons name="delete-sweep" size={24} color={Colors.white} />
        </Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert("Update Fligth")}
        style={{ backgroundColor: "blue", justifyContent: "center" }}
      >
        <Animated.Text
          style={{
            color: "white",
            paddingHorizontal: 19,
            fontWeight: "600",
            transform: [{ scale }]
          }}
        >
          <MaterialIcons name="edit" size={24} color={Colors.white} />
        </Animated.Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  citysCode: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10
  },
  citys: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    borderBottomColor: Colors.grey2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  info: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1
  }
});
