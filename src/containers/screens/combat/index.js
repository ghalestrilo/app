import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image
} from "react-native";

import { connect } from "react-redux";

const image = 0;

const style = {};

const CombatEvent = ({ author, action, target }) =>
  <View style={style.combatEventCard}>
    <Image style={style.circle} source={author.image}/>
    <Text style={style.action}>=> {action.type} =></Text>
    <Image style={style.circle} source={target.image}/>
  </View>;

const CombatOption = option => (
  (typeof option === Array)
    ? null
    : null);


class Combat extends React.Component {
  render = () =>
    <View>
      <ScrollView>
        {this.props.events.map(CombatEvent)}
      </ScrollView>

      <View style={style.actionDrawer}>
        {this.props.player.actions.map(CombatOption)}
      </View>
    </View>
}

const mapStateToProps = state => ({
  events: state.combat.events.map(
    event => ({
      ...event,
      author: state.combat.actors[event.author],
      target: state.combat.actors[event.target]
    })),
  
  player: state.combat.actors[state.combat.player],
  enemies: state.combat.actors.filter(x => x.type === "enemy"),
  heroes: state.combat.actors.filter(x => x.type === "hero"),

  victory: (state.combat.actors.filter(x => x.type === "enemy") === []),
  defeat: (state.combat.actors.filter(x => x.type === "hero") === [])
});

export default connect(mapStateToProps)(Combat);
