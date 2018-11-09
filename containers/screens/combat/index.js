import React from "react";
import {
  View,
  ImageBackground,
  Text
} from "react-native";

import {

} from "";

import { connect } from "react-redux";

const image = 0;
const masterOptions = [

]

const CombatEvent = ({ author, action, target }) =>
  <View style={style.combatEventCard}>
    <Image style={style.circle} source={author.image}/>
    <Text style={style.action}>=> {action} =></Text>
    <Image style={style.circle} source={target.image}/>
  </View>;

// const CombatOption = option => (
//   <Button
//   (typeof option === Array)
//     ? 
//     : )
  

class Combat extends React.Component {

  render = () =>
    <View>
      <ScrollView>
        {this.props.events.map(CombatEvent)}
      </ScrollView>

      <View style={style.actionDrawer}>
        {this.props.combat.options.map(CombatOption)}
      </View>
    </View>
}

const mapStateToProps = state => ({
  master: (state.adventure.master.id === state.user.id),
  user: state.user,
  enemies: state.combat.enemies,
  events: state.combat.events
});

export default connect(mapStateToProps)(Combat);
