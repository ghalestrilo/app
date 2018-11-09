import React from "react";
import { connect } from "react-redux";

import {
  ScrollView,
  View
} from "react-native";

import {
  IgorBackground,
  Adventure,
  Fab,
  TabBarNavigation,
  EditAdventure
} from "../../../components/Igor";
import { colors } from "../../../styles";

import { delAdventure, choseAdventure } from "../../../reducers/adv/index";

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

  render = () => {
    const { adventures, navigation } = this.props;
    const empty = adventures.length === 0;
    const edit = (this.state.edit === true)

    return (
      <View style={{ flex: 1 }}>
        { (edit)
          ? <TabBarNavigation
              navigate = {() => { navigation.openDrawer() ; }}
              edit = {() => { this.edit() ; }}
              color = {edit ? null : colors.drawernavinactive}/>
          : <TabBarNavigation
              navigate = {() => { navigation.openDrawer() ; }}
              edit = {() => { this.edit() ; }}/>
          }
        <ScrollView>
          { adventures.map((adv, i) =>
            ((edit)
              ? <EditAdventure key={i} props={{
                    ...adv,
                    onPress: () => this.deleteAdventure(adv, i)
                  }}/>
              : <Adventure key={i} props={{
                  ...adv,
                  onPress: () => this.onClickAdventure(i)
                }}/>))
          }
        </ScrollView>
        { (!edit)
          ? <Fab source={newAdventureImage} onPress={() => this.onNewAdventure()} />
          : null}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  adventures: state.adventures.list,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
