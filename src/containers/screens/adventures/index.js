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

import { pickAdventure } from "../../../actions/adventure";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
  state = {
    edit: false
  }

  onClickAdventure = (adventureIndex) => {
    this.dispatch(pickAdventure(index));
    this.props.navigation.navigate("Adventure");
  }
  onNewAdventure = () => this.props.navigation.navigate("NewAdventure");
  toggleEdit = () => this.setState({ edit: !this.getState().edit })

  render() {
    const { adventures } = this.props;
    
    return (
      IgorBackground(
        <SafeAreaView>
          <SafeAreaView>
            <ScrollView>
              <TabBarNavigation navigate={() => { this.props.navigation.openDrawer() ; }}/>
              {adventures.map((adv, i) =>
                <Adventure
                  key={i}
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
  adventures: state.adventures.list
});

export default connect(mapStateToProps)(Adventures);
