import React from "react";
import { connect } from "react-redux";

import {
  ScrollView,
  View,
  Text
} from "react-native";

import {
  IgorBackground,
  Adventure,
  Fab,
  TabBarNavigation,
  EditAdventure
} from "../../../components/Igor";
import { colors } from "../../../styles";

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
  edit(){
    this.setState({ edit: !this.state.edit });
  }
  render() {
    const { adventures } = this.props;
    // const { forms } = this.state;
    if (!this.state.edit){
      return (
        IgorBackground(
          <View style={{ flex: 1 }}>
            <TabBarNavigation
              navigate = {() => { this.props.navigation.openDrawer() ; }}
              edit = {() => { this.edit() ; }}/>
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
    }else{
      return (
        IgorBackground(
          <View style={{ flex: 1 }}>
            <TabBarNavigation
              navigate = {() => { this.props.navigation.openDrawer() ; }}
              edit = {() => { this.edit() ; }}
              color = {colors.drawernavinactive}/>
            <ScrollView>
              {adventures.map((adv, i) =>
                <EditAdventure
                  key={i}
                  props={{
                    ...adv,
                    onPress: () => {}
                  }}/>)
              }
            </ScrollView>
          </View>
        )
      );

    }
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(Adventures);
