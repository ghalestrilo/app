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
  FormLabel
} from "react-native-elements";
import {
  TabBarNavigation,
  Input,
  IgorBackground
} from "../../../components/Igor";
import styles from "./styles";
import { delAdventure } from "../../../reducers/adv/index";
import { addAdventure } from "../../../actions/adventure";

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
      brief: "",
      switch: "corvali"
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
    }else{
      this.setState({ switch: "" });
      this.setState({ switch: value });
    }
  }
  isToggled = (value) => {
    return(value === this.state.switch);
  }
  async createAdventure(chosen){
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
      if (Object.keys(chosen).length === 0 && chosen.constructor === Object){
        await this.props.addAdventure({
          title: this.state.adventure,
          image: req,
          nextSession: ["ainda nao marcada"],
          sinopse: this.state.brief,
          progress: 0
        });
      }else{
        this.props.delAdventure(chosen);
        this.props.addAdventure({
          ...chosen,
          title: this.state.adventure,
          image: req
        });
      }
      this.props.navigation.pop();
    }else {
      Alert.alert("You must choose one image and write the adventure name");
    }
  }
  render(){
    const { chosen } = this.props;
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
            <Input
              title="Sinopse"
              value={this.state.brief}
              onChange={(text) => this.handleFormChange(text, "brief")}
            />
            <FormLabel>Escolha uma imagem</FormLabel>
            <View style ={{ flex: 1, marginTop: 4 }}>
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
                  onPress={() => { this.createAdventure(chosen) ; }}
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
  chosen: state.adventures.chosen
});

export default connect(mapStateToProps, {
  addAdventure: addAdventure,
  delAdventure: delAdventure
})(NewAdventureScreen);
