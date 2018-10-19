import React from "react";
import { connect } from "react-redux";

import {
  View
} from "react-native";

import {
  IgorBackground,
  Adventure,
  Fab
} from "../../../components/Igor";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Home extends React.Component {
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
        <View>
          {adventures.map((a, i) =>
            (Adventure(a, () => this.onClickAdventure(i))))
          }
          <Fab
            source={newAdventureImage}
            onPress={() => this.onNewAdventure()}
          />
        </View>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(Home);
