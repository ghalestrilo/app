import React from "react";
import { connect } from "react-redux";

import {
  SafeAreaView,
  Text
} from "react-native";

import {
  IgorBackground,
  TabBarNavigation
} from "../../../components/Igor";

class EditAdv extends React.Component {
  render(){
    return (
      IgorBackground(
        <SafeAreaView style = {{ flex: 1 }}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <Text>andamento</Text>
        </SafeAreaView>
      )
    );
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(EditAdv);
