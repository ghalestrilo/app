import React from "react";
import { connect } from "react-redux";

import {
  SafeAreaView,
  ScrollView,
  View
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

  onClickAdventure(adv, i){
    // this.props.dispatch(viewAdventure(i))
    this.props.navigation.navigate("Adventure", { title: adv.title });
  }

  onNewAdventure(){
    this.props.navigation.navigate("NewAdventure");
  }
  render() {
    const { adventures } = this.props;
    // const { forms } = this.state;
    return (
      IgorBackground(
        <View style={{ flex: 1 }}>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <ScrollView>
            {adventures.map((adv, i) =>
              <Adventure
                key={i}
                props={{
                  ...adv,
                  onPress: () => this.onClickAdventure(adv, i)
                }}/>)
            }
          </ScrollView>
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

export default connect(mapStateToProps)(Adventures);
