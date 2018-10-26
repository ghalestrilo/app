import React from "react";
import { connect } from "react-redux";

import {
  SafeAreaView,
  ScrollView
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
    // this.props.dispatch(viewAdventure(i))
    this.props.navigation.navigate("Adventure");
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
          <SafeAreaView>
            <ScrollView>
              <TabBarNavigation
                navigate = {() => { this.props.navigation.openDrawer() ; }}/>
              {adventures.map((adv, i) =>
                <Adventure
                  props={{
                    ...adv,
                    onPress: () => this.onClickAdventure(i)
                  }}/>)
              }
            </ScrollView>
          </SafeAreaView>
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
