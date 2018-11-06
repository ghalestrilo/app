import React from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native";
import {
  IgorBackground,
  TabBarNavigation
} from "../../../components/Igor";
import styles from "./styles";

class NewAdventureScreen extends React.Component {
  render(){
    return(
      IgorBackground(
        <SafeAreaView style = {styles.container}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
        </SafeAreaView>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(NewAdventureScreen);
