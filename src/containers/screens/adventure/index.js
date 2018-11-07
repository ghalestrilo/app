import React from "react";
import { connect } from "react-redux";
import { SafeAreaView, View, Text } from "react-native";
import {
  IgorBackground,
  TabBarNavigation
} from "../../../components/Igor";
import styles from "./styles";

class AdventureScreen extends React.Component {
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
    const title = this.props.navigation.getParam("title", "NO-ID");
    return(
      IgorBackground(
        <SafeAreaView style = {styles.container}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <Text style = {styles.title}>{title}</Text>
          <View style = {styles.inputbackground}>
          </View>
        </SafeAreaView>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(AdventureScreen);
