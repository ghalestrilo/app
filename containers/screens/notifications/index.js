import React from "react";
import {
  SafeAreaView,
  ImageBackground,
  Text,
} from "react-native";

const background = require("../../../images/background/background.png");

class Notification extends React.Component {
  render(){
    return(
        <SafeAreaView> 
            <ImageBackground
            source = {background}
            style = {{width: '100%', height: '100%'}}
            resizeMethod="resize"
            >
              <SafeAreaView style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize : 28}}> This is NotificationScreen</Text>
              </SafeAreaView>
            </ImageBackground>
        </SafeAreaView>
    );  
  }
}

export default Notification;