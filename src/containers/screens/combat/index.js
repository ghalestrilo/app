import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import * as Progress from "react-native-progress";

import { connect } from "react-redux";
import { colors } from "../../../styles";

const style = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#060606"
  },


  // --------------------------------- EVENT

  eventbox: {
    padding: 8
  },

  event: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,

    margin: 4,

    height: 100,
    borderRadius: 15,
    backgroundColor: "lightgray"
  },

  eventAction: {
    fontSize: 24,
    color: "gray"
  },

  circle: {
    borderRadius: 30,
    width: 60,
    height: 60
  },

  // --------------------------------- HUD
  hud: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: 16
  },

  actorstack: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 8,

    width: null,
    backgroundColor: "lightgray"
  },



  portrait: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain"
  },

  tinyactor: {
    borderRadius: 5,
    width: 50,
    height: 60
  },

  playerhud: {
    flex: 1,
    borderRadius: 5,
    margin: "auto"
  },

  // --------------------------------- DRAWER
  actionDrawer: {
    alignSelf: "flex-end",
    borderColor: "black"
  }
});

const CombatEvent = ({ author, action, target }) =>
  <View style={style.event}>
    <Image style={style.circle} source={author.portrait}/>
    <Text style={style.eventAction}> {action.type} </Text>
    <Image style={style.circle} source={target.portrait}/>
  </View>;

const CombatOption = option => (
  (typeof option === Array)
    ? null
    : null);

const TinyActor = ({ actor, onPress }) => (
  <TouchableOpacity style={style.tinyactor} onPress={() => onPress()}>
    <Image source={actor.portrait} style={style.portrait}/>
    <Progress.Bar
      progress={(actor.maxhp / actor.maxhp)}
      width={null}
      height={4}
      color={(actor.hero ? colors.yellow : colors.red)}
    />
  </TouchableOpacity>
);

const PlayerHUD = ({ actor, onPress }) => (
  <TouchableOpacity style={style.playerhud} onPress={() => onPress()}>
    <Image source={actor.portrait} style={style.portrait}/>
    <Progress.Bar
      progress={(actor.maxhp / actor.maxhp)}
      width={null}
      height={4}
      color={(actor.hero ? colors.yellow : colors.red)}
    />
  </TouchableOpacity>
);

class Combat extends React.Component {
  render = () =>
    <View style={style.screen}>
      <ScrollView style={style.eventbox}>
        {this.props.events.map((event, i) =>
          <CombatEvent key={`event${i}`}
            author={event.author}
            action={event.action}
            target={event.target}/>)}
      </ScrollView>

      <View style={style.hud}>
        <View style={style.actorstack}>
          {this.props.heroes.map((actor, i) => <TinyActor key={`heroes${i}`} actor={actor} tiny={true}/>)}
        </View>
        <PlayerHUD actor={this.props.player}/>
        <View style={style.actorstack}>
          {this.props.enemies.map((actor, i) => <TinyActor key={`enemies${i}`} actor={actor} tiny={true}/>)}
        </View>
      </View>

      <View style={style.actionDrawer}>
        {this.props.player.actions.map(CombatOption)}
      </View>
    </View>
}

const mapStateToProps = state => ({
  events: state.combat.events
    .slice(0, 4)
    .map(
      event => ({
        ...event,
        author: state.combat.actors[event.author],
        target: state.combat.actors[event.target]
      })),

  player: state.combat.actors[state.combat.player],
  enemies: state.combat.actors.filter(x => x.hero === false),
  heroes: state.combat.actors.filter(x => x.hero === true),

  // Class Methods?
  victory: (state.combat.actors.filter(x => x.hero === false) === []),
  defeat: (state.combat.actors.filter(x => x.hero === true) === [])
});

export default connect(mapStateToProps)(Combat);
