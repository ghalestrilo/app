import React from "react";
import { connect } from "react-redux";

import {
  ScrollView,
  View
} from "react-native";

import {
  Adventure,
  Fab,
  TabBarNavigation,
  EditAdventure,
  IgorBackground
} from "../../../components/Igor";
import { colors } from "../../../styles";

import { delAdventure, choseAdventure } from "../../../reducers/adv/index";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
  state = {
    edit: false
  }

  onClickAdventure(adv){
    this.props.choseAdventure(adv);
    // this.props.dispatch(viewAdventure(i))
    this.props.navigation.navigate("Adventure");
  }
  deleteAdventure(adv){
    this.props.delAdventure(adv);
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
                    onPress: () => this.onClickAdventure(adv)
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
                    onPress: () => this.deleteAdventure(adv, i)
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
  adventures: state.adventures.list
});

export default connect(mapStateToProps, {
  delAdventure: delAdventure,
  choseAdventure: choseAdventure
})(Adventures);
