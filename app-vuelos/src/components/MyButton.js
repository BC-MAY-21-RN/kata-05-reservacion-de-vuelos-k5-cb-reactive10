import { StyleSheet, Image, View, TouchableOpacity,Text} from 'react-native'
import React from 'react'
import { Colors } from '../theme/Colors'


const MyButton =( {text, alertText,name})=>{

    return(
        <>
        <TouchableOpacity onPress={() => alert(alertText)}>
        <View
          style={{
            width: "95%",
            height: 50,
            backgroundColor: "#B6B7BA",
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginRight: "auto",
            marginLeft:"auto",
            marginBottom:15 ,
            marginTop: 15,
          }}
        >
            { name === "google" &&  
          <View style={{ marginLeft: -20 }}>
            <Image
              source={require("../assets/g1.png")}
              style={{ width: 40, height: 40 }}
            />
          </View>
           }

          <Text
            style={{ color: Colors.white, fontSize: 20, fontWeight: "500" }}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
        
        </>


    )

}

export default MyButton
