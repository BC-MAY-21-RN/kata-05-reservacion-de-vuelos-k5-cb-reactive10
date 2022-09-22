import React, { useState } from "react";
import {
  Modal,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { styleSelectLocation } from "./style/StyleSelectLocation";
import { ModalPicker } from "./ModalPicker";
import { useDispatch, useSelector } from "react-redux";
import { handleState } from "../redux/features/flightsSlice";

const MySelectLocation = (props) => {
  //REDUX
  const dispatch = useDispatch();
  const estado = useSelector((state) => state.stateGlobal);

  //
  const [chooseData, setChooseData] = useState("Select Location");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (parameter) => {
    setIsModalVisible(parameter);
  };

  const setData = (option) => {
    setChooseData(option);
    dispatch(handleState(option));
  };
  console.log(estado);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginLeft: 20,
          borderBottomColor: "grey",
          borderBottomWidth: StyleSheet.hairlineWidth
        }}
      >
        <Text onPress={() => changeModalVisibility(true)} style={styles.text}>
          {chooseData}
        </Text>
      </View>
      <Modal
        transparent
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
};
export default MySelectLocation;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "grey"
  },
  touchableOpacity: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
    marginLeft: 20
  }
});
