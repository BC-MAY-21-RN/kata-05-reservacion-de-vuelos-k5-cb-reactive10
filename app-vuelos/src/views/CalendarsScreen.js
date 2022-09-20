import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React,{useState} from "react";
import MyButton from "../components/MyButton";
import MySelectLocation from "../components/MySelectLocation";
import TextBooking from "../components/TextBooking";
import { Colors } from "../theme/Colors";


import { AntDesign } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { stylesLogin } from "../views/style/StyleLogin";



export default function CalendarScreen() {

    const [day, setDay] = useState("")
// se guarda el dia seleccionadooooo

    let renderArrow = (direction) => {
        if(direction === 'left') {
            return <AntDesign name="left" size={24} color="#7A76D1" />
        } else {
            return <AntDesign name="right" size={24} color="#7A76D1" />
        }
      }
  return (


    <SafeAreaView style={styles.container}>


      <Calendar 
    style={{
      height: '55%',
      borderColor: 'gray',
      marginTop:100
      
    }}
    theme={{
      textDayFontSize: 16,
      textMonthFontSize: 26,
      textMonthFontWeight: '500',
      textDayFontSize: 20,

     }}
        // cambiar por el dia actual
      initialDate={'2022-08-17'}
      minDate={'2022-08-17'}

      onDayPress={day => {
        console.log('selected day', day);
        setDay(day.dateString)
      }}
      renderArrow={renderArrow}
        
       
      

  disableAllTouchEventsForDisabledDays={true}

  markingType={'custom'}

  markedDates={{
  [day]: {customStyles: {
    container: {
      backgroundColor: '#7A76D1',
      height: 37,
      width: 37
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
    }},
  }
}
  }
    
/>
<MyButton                 
    text={"Next"}
/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      }
});
