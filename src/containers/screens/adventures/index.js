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
import { pickAdventure, setEditMode } from "../../../reducers/adv/index";
import { getAdventures, delAdventure } from "../../../actions/adventure";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
  state = {
    edit: false
  }

  onClickAdventure(adv){
    this.props.pickAdventure(adv);
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
  editAdventure(adv){
    this.props.pickAdventure(adv);
    this.props.setEditMode();
    this.props.navigation.navigate("NewAdventure");
  }

  async componentDidMount() {
    await this.props.getAdventures();
  }

  render() {
    const { adventures } = this.props;
    const newadv = [];
    for (const index in adventures) {
      newadv.push(adventures[index]);
    }
    // const { forms } = this.state;
    if (!this.state.edit){
      return (
        IgorBackground(
          <View style={{ flex: 1 }}>
            <TabBarNavigation
              navigate = {() => { this.props.navigation.openDrawer() ; }}
              edit = {() => { this.edit() ; }}/>
            <ScrollView>
              {newadv ? newadv.map((adv, i) =>
                <Adventure
                  key={i}
                  props={{
                    ...adv,
                    onPress: () => this.onClickAdventure(adv)
                  }}/>)
                : null }
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
              {newadv ? newadv.map((adv, i) =>
                <EditAdventure
                  key={i}
                  props={{
                    ...adv,
                    delete: () => this.deleteAdventure(adv),
                    edit: () => this.editAdventure(adv)
                  }}/>)
                : null}
            </ScrollView>
          </View>
        )
      );
    }
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures.list,
  chosen: state.adventures.chosen
});

export default connect(mapStateToProps, {
  delAdventure: delAdventure,
  pickAdventure: pickAdventure,
  getAdventures: getAdventures,
  setEditMode: setEditMode
})(Adventures);
