import React, { useState } from "react";
import { Modal, SafeAreaView, Text, View } from "react-native";
import { styleSelectLocation } from "./style/StyleSelectLocation";
import { ModalPicker } from "./ModalPicker";
import { useDispatch } from "react-redux";
import {
  handleCodeInitial,
  handleCityInitial
} from "../redux/features/flightsSlice";

const MySelectLocation = () => {
  //REDUX Dispatch
  const dispatch = useDispatch();

  //state para el Modal
  const [chooseData, setChooseData] = useState("Select Location");
  const [chooseCode, setChooseCode] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (parameter) => {
    setIsModalVisible(parameter);
  };

  //actualizar estado redux
  const setCode = (code) => {
    setChooseCode(code);
    dispatch(handleCityInitial(code));
  };

  const setCityInitial = (cityInitial) => {
    setChooseData(cityInitial);
    dispatch(handleCodeInitial(cityInitial));
  };

  return (
    <SafeAreaView>
      <View style={styleSelectLocation.txtSelect}>
        <Text
          onPress={() => changeModalVisibility(true)}
          style={styleSelectLocation.text}
        >
          {chooseData},{chooseCode}
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
          setCityInitial={setCityInitial}
          setCode={setCode}
        />
      </Modal>
    </SafeAreaView>
  );
};
export default MySelectLocation;
