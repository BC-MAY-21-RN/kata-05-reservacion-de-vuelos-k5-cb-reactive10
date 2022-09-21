import { SafeAreaView, Animated } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import Title from "../components/Title";
import { data } from "../data/data";
import ListFlights from "../components/ListFlights";
import FloatingActionButton from "../components/FloatingActionButton";
import { stylesMyFlights } from "./style/StyleMyFlights";

//constan animated
const SPACING = 20;
const ITEM_SIZE = 70 + SPACING * 3;

const MyFlights = ({ navigation }) => {
  const listData = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5)
    ];
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0]
    });
    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0]
    });
    return (
      <ListFlights data={item} index={index} scale={scale} opacity={opacity} />
    );
  };
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={stylesMyFlights.container}>
      <StatusBar style="dark" />
      <Title titleContent={"My Flights"} />
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id}
        renderItem={listData}
      />
      <FloatingActionButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyFlights;
