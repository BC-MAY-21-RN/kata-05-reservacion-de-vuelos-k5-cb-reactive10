import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { citys } from "../data/citys";
//const { code, country } = citys;

const BD = citys;
//const BD = ["MEX", "COL", "USA", "CHI", "BOG", "AMS"];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ModalPicker = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
  };

  // const listData = BD.map((data, id) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.option}
  //       key={id}
  //       onPress={() => onPressItem(data.code_IATA)}
  //     >
  //       <Text style={styles.text}>
  //         {data.code_IATA} {data.country}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // });

  const renderItem = ({ item }) => {
    const { country, code } = item;
    return (
      <TouchableOpacity
        style={styles.option}
        //key={id}
        onPress={() => onPressItem(country)}
      >
        <Text style={styles.text}>
          {code} {country}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        {/* <ScrollView>{listData}</ScrollView> */}
        <FlashList
          data={citys}
          contentContainerStyle={{
            backgroundColor: "red",
            paddingVertical: 5
          }}
          renderItem={renderItem}
          estimatedItemSize={200}
          numColumns={1}
        />
      </View>
    </TouchableOpacity>
  );
};
export { ModalPicker };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    backgroundColor: "white",
    borderRadius: 10
  },
  option: {
    alignItems: "flex-start"
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold"
  }
});
