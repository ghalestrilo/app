import React from "react";
import {
  View,
  ImageBackground,
  TextInput,
  Image
} from "react-native";

const background = require("../../../images/background/background.png");

class Home extends React.Component {
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
            </ImageBackground>
        </View>
    );  
  }
}

export default Home;