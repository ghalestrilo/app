import React from "react";
import { connect } from "react-redux";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import {
  IgorBackground,
  TabBarNavigation,
  Input
} from "../../../components/Igor";
import styles from "./styles";

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
            <View>
              <TouchableOpacity
                style={styles.buttonLayout}
                onPress={() => {}}
              >
                <Text>Pronto</Text>
              </TouchableOpacity>
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
