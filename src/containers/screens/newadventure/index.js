import React from "react";
import { connect } from "react-redux";
import { SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Switch
} from "react-native";
import {
  IgorBackground,
  TabBarNavigation,
  Input
} from "../../../components/Igor";
import styles from "./styles";

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
      activeswitch: "",
      corvali: false,
      krevast: false,
      coast: false,
      heartlands: false
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
      //this.setState({ switch: value });
      console.log("Switch is: " + value);
    }else if (this.state.switch === value){
      this.setState({ switch: "" });
      console.log("Switch is not:" + value);
    }
  }
  isToggled = (value) => {
    switch(value){
    case "corvali":
      return (this.state.corvali);
    case "krevast":
      return (this.state.krevast);
    case "coast":
      return (this.state.coast);
    case "heartlands":
      return (this.state.heartlands);

    default: return false;
    }
  }
  componentDidMount(){
    this.setState({ switch: "coast" });
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
                  onPress={() => {}}
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

export default connect(mapStateToProps)(NewAdventureScreen);
