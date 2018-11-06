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
      adventure: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
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
                    <Switch/>
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
