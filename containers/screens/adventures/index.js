import React from "react";
import { connect } from "react-redux";

import {
  SafeAreaView
} from "react-native";

import {
  IgorBackground,
  Adventure,
  Fab,
  TabBarNavigation
} from "../../../components/Igor";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
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
        <SafeAreaView>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          {adventures.map((a, i) =>
            (Adventure(a, () => this.onClickAdventure(i))))
          }
          <Fab
            source={newAdventureImage}
            onPress={() => this.onNewAdventure()}
          />
        </SafeAreaView>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(Adventures);
