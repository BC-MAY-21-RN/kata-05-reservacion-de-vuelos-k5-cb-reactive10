import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Colors } from "../theme/Colors";
import { swipeRightActions } from "../utils/helpers";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesListFlights } from "./style/StyleListFlights";

const ListFlights = ({ data }) => {
  const { cityInitial, cityFinal, routeInitial, routeFinal, passengers, date } =
    data;
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={swipeRightActions}>
        <View style={stylesListFlights.citysCode}>
          <Text style={stylesListFlights.routes}>{routeInitial}</Text>
          <MaterialIcons
            name="flight"
            size={24}
            color={Colors.blue}
            style={stylesListFlights.iconFligth}
          />
          <Text style={stylesListFlights.routes}>{routeFinal}</Text>
        </View>
        <View style={stylesListFlights.citys}>
          <Text style={stylesListFlights.city}>{cityInitial}</Text>
          <Text style={[stylesListFlights.city, { paddingBottom: 5 }]}>
            {cityFinal}
          </Text>
        </View>
        <View style={stylesListFlights.info}>
          <Text style={stylesListFlights.infotext}>{date}</Text>
          <Text style={[stylesListFlights.infotext, { paddingBottom: 18 }]}>
            {`${passengers} Passengers`}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListFlights;
