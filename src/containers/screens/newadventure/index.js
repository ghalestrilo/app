import React from "react";
import { connect } from "react-redux";
import { SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Switch,
  Alert
} from "react-native";
import {
  IgorBackground,
  TabBarNavigation,
  Input
} from "../../../components/Igor";
import styles from "./styles";
import { addAdventure } from "../../../reducers/adv/index";

let req = require("../../../images/adventures/miniatura_corvali.png");
const corvali = {
  source: require("../../../images/adventures/miniatura_corvali.png"),
  name: "corvali"
};
const krevast = {
  source: require("../../../images/adventures/miniatura_krevast.png"),
  name: "krevast"
};
const coast = {
  source: require("../../../images/adventures/miniatura_coast.png"),
  name: "coast"
};
const heartlands = {
  source: require("../../../images/adventures/miniatura_heartlands.png"),
  name: "heartlands"
};
const images = [ corvali, krevast, coast, heartlands ];

class NewAdventureScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      adventure: "",
      switch: "coast"
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
  }
  toggleSwitch = (value) => {
    if(this.state.switch === ""){
      this.setState({ switch: value });
    }else if (this.state.switch === value){
      this.setState({ switch: "" });
    }
  }
  isToggled = (value) => {
    return(value === this.state.switch);
  }
  componentDidMount(){
    this.setState({ switch: "coast" });
  }
  createAdventure(){
    if((this.state.adventure.length > 0) &&(this.state.switch.length > 0)){
      switch(this.state.switch){
      case "coast":
        req = require("../../../images/adventures/miniatura_coast.png");
        break;
      case "krevast":
        req = require("../../../images/adventures/miniatura_krevast.png");
        break;
      case "corvali":
        req = require("../../../images/adventures/miniatura_corvali.png");
        break;
      case "heartlands":
        req = require("../../../images/adventures/miniatura_heartlands.png");
        break;
      default:
        req = "";
      }
      this.props.addAdventure({
        title: this.state.adventure,
        image: req,
        nextSession: "",
        progress: 0
      });
      this.props.navigation.pop();
    }else {
      Alert.alert("You must choose one image and write the adventure name");
    }
  }

  render(){
    return(
      IgorBackground(
        <SafeAreaView style = {styles.container}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <View style = {styles.inputbackground}>
            <Input
              title="Criar Aventura"
              value={this.state.adventure}
              onChange={(text) => this.handleFormChange(text, "adventure")}/>
            <View style ={{ flex: 1 }}>
              <View style = {styles.images}>
                {images.map((imagem) => (
                  <View style = {styles.image} key = {imagem.name}>
                    <Switch
                      onValueChange={() => { this.toggleSwitch(imagem.name) ; }}
                      value={this.isToggled(imagem.name)}/>
                    <ImageBackground
                      source = {imagem.source}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode = "contain"/>
                  </View>
                ))}
              </View>
              <View style = {{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.buttonLayout}
                  onPress={() => { this.createAdventure() ; }}
                >
                  <Text>Pronto</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps, { addAdventure: addAdventure })(NewAdventureScreen);
