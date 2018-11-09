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
  EditAdventure
} from "../../../components/Igor";
import { colors } from "../../../styles";

import {
  deleteAdventure,
  pickAdventure
} from "../../../actions/adventure";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
  state = {
    edit: false
  }

  onClickAdventure = (index) => {
    this.props.pickAdventure(index);
    this.props.navigation.navigate("Adventure");
  }
  onNewAdventure = () => this.props.navigation.navigate("NewAdventure");
  toggleEdit = () => this.setState({ edit: !this.getState().edit })

  render = () => {
    const { adventures, navigation } = this.props;
    const empty = adventures.length === 0;
    const edit = (this.state.edit === true)

    return (
      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        { (edit)
          ? <TabBarNavigation
              navigate = {() => { navigation.openDrawer() ; }}
              edit = {() => { this.toggleEdit() ; }}
              color = {edit ? null : colors.drawernavinactive}/>
          : <TabBarNavigation
              navigate = {() => { navigation.openDrawer() ; }}
              edit = {() => { this.toggleEdit() ; }}/>
          }
        <ScrollView style={{ backgroundColor: 'transparent'}}>
          { adventures.map((adv, i) =>
            ((edit)
              ? <EditAdventure key={i} props={{
                    ...adv,
                    onPress: () => this.props.deleteAdventure(i)
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
  pickAdventure: (index) => dispatch(pickAdventure(index)),
  deleteAdventure: (index) => dispatch(deleteAdventure(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Adventures);
