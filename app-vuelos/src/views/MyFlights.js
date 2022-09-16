import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Title from "../components/Title";
import { data } from "../data/data";
import ListFlights from "../components/ListFlights";
import FloatingActionButton from "../components/FloatingActionButton";

const MyFlights = ({ navigation }) => {
  const listData = ({ item }) => <ListFlights data={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Title titleContent={"My Flights"} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={listData}
      />
      <FloatingActionButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyFlights;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 20
  }
});
