import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import * as Progress from "react-native-progress";
import { colors } from "../../../styles";
import style from "./style";

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
      color={(actor.hero ? colors.green : colors.red)}
    />
    <Text style={style.playername}>{actor.name}</Text>
  </TouchableOpacity>
);

const ActorStack = ({ title, actors, keyname, onPress = () => {}, flipped = false }) =>
  <View style={[ style.actorstack, (flipped ? style.roundedLeft : style.roundedRight) ]}>
    <Text style={style.playername}>{title}</Text>
    {
      actors.map((actor, i) =>
        <TinyActor
          key={`${keyname}${i}`}
          actor={actor}
          onPress={() => onPress(i)}
          tiny={true}/>
      )
    }
  </View>;

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
        <ActorStack title={"Heróis"} actors={this.props.heroes} keyname={"hero"}/>
        <PlayerHUD actor={this.props.player}/>
        <ActorStack title={"Inimigos"} actors={this.props.enemies} keyname={"enemy"} flipped/>
      </View>

      <View style={style.actionDrawer}>
        <Text>Ações</Text>
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
