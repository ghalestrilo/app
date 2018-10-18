import React from "react";
import { connect } from "react-redux";

import {
<<<<<<< HEAD
  View
=======
  View,
  ImageBackground,
  Text,
  Button,
>>>>>>> b560fafc8734b165043a9307e3b15527e27a0883
} from "react-native";

import {
  IgorBackground,
  Adventure,
  Fab
} from "../../../components/Igor";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Home extends React.Component {
<<<<<<< HEAD
  state = {
    edit: false
  }

  onClickAdventure(i){
    console.warn("click", i);
  }

  onNewAdventure(){
    this.props.navigation.navigate("NewAdventure");
  }

  render() {
    const { adventures } = this.props;
    // const { forms } = this.state;
    return (
      IgorBackground(
        <View>
          {adventures.map((a, i) =>
            (Adventure(a, () => this.onClickAdventure(i))))
          }
          <Fab
            source={newAdventureImage}
            onPress={() => this.onNewAdventure()}
          />
=======
  render(){
    return(
        <View> 
            <ImageBackground
            source = {background}
            style = {{width: '100%', height: '100%'}}
            resizeMethod="resize"
            >
              <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize : 28}}> This is HomeScreen</Text>
                <Button
                  title="Drawer"
                  onPress = {()=>{this.props.navigation.openDrawer()}}
                
                />
              </View>
            </ImageBackground>
>>>>>>> b560fafc8734b165043a9307e3b15527e27a0883
        </View>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(Home);
