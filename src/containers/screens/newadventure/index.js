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
import { delAdventure, unsetEditMode } from "../../../reducers/adv/index";
import { addAdventure, updateAdventure } from "../../../actions/adventure";
import characters from "../../../reducers/session/state";

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
const images = [
  corvali, krevast, coast, heartlands
];

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
      if (Object.keys(chosen).length === 0 && chosen.constructor === Object){
        await this.props.addAdventure({
          title: this.state.adventure,
          image: this.state.switch,
          nextSession: "ainda nao marcada",
          heroes: {},
          brief: this.state.brief,
          progress: 0,
          availableEnemies: characters.availableEnemies
        });
      }else{
        this.props.delAdventure(chosen);
        this.props.addAdventure({
          ...chosen,
          title: this.state.adventure,
          image: this.state.switch
        });
      }
      this.props.navigation.pop();
    }else {
      Alert.alert("You must choose one image and write the adventure name");
    }
  }

  async editAdventure(chosen){
    if((this.state.adventure.length > 0) &&(this.state.switch.length > 0)){
      if (Object.keys(chosen).length === 0 && chosen.constructor === Object){
        await this.props.updateAdventure({
          title: this.state.adventure,
          image: this.state.switch,
          nextSession: chosen.nextSession,
          brief: this.state.brief,
          progress: chosen.progress
        });
      }else{
        this.props.delAdventure(chosen);
        this.props.updateAdventure({
          ...chosen,
          title: this.state.adventure,
          image: this.state.switch
        });
      }
      this.props.unsetEditMode();
      this.props.navigation.pop();
    }else {
      Alert.alert("You must choose one image and write the adventure name");
    }
  }

  componentDidMount() {
    this.state.adventure = this.props.isEditMode ? this.props.chosen.title : "";
    this.state.switch = this.props.isEditMode ? this.props.chosen.image : this.state.switch;
  }
  render(){
    console.log(characters.availableEnemies);
    const { chosen, isEditMode } = this.props;
    return(
      IgorBackground(
        <SafeAreaView style = {styles.container}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <View style = {styles.inputbackground}>
            <FormLabel containerStyle={{ alignItems: "center" }}>
              {isEditMode ? "Editar Aventura" : "Criar Aventura"}
            </FormLabel>
            <Input
              title="Nome da Aventura"
              value={isEditMode ? chosen.title : this.state.adventure}
              onChange={(text) => this.handleFormChange(text, "adventure")}/>
            <Input
              title="Sinopse"
              value={isEditMode ? chosen.brief : this.state.brief}
              onChange={(text) => this.handleFormChange(text, "brief")}
            />
            <FormLabel>Escolha uma imagem</FormLabel>
            <View style ={{ flex: 1, marginTop: 4 }}>
              <View style = {styles.images}>
                {images.map((imagem, key) => (
                  <View key={key} style={styles.image}>
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
                  onPress={() => { isEditMode ? this.editAdventure(chosen) : this.createAdventure(chosen) ; }}
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
  chosen: state.adventures.chosen,
  isEditMode: state.adventures.editMode
});

export default connect(mapStateToProps, {
  addAdventure: addAdventure,
  delAdventure: delAdventure,
  updateAdventure: updateAdventure,
  unsetEditMode: unsetEditMode
})(NewAdventureScreen);
