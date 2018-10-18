import React from "react";
import {
  View,
  ImageBackground,
  Text,
} from "react-native";

const background = require("../../../images/background/background.png");

class Adventures extends React.Component {
  static navigationOptions = {
    header:null
  }
  render(){
    return(
        <View> 
            <ImageBackground
            source = {background}
            style = {{width: '100%', height: '100%'}}
            resizeMethod="resize"
            >
              <Text style={{fontSize = 28}}> This is AdventuresScreen</Text>
            </ImageBackground>
        </View>
    );  
  }
}

export default Adventures;