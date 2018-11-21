import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import {
  List,
  ListItem,
  Button
} from "react-native-elements";

import * as Progress from "react-native-progress";
import { colors } from "../../styles";
import style from "./style";

export const CombatEvent = ({ author, action, target }) =>
  <View style={style.event}>
    <Image style={style.circle} source={author.portrait}/>
    <Text style={style.eventAction}> {action.type} </Text>
    <Image style={style.circle} source={target.portrait}/>
  </View>;

export const CombatAction = ({ action, onPress }) =>
  <Button
    title={action.type.toUpperCase()}
    onPress={() => onPress()}
  />;

// Flipped for names on left, right-justified
export const TinyActor = ({ actor, onPress, flipped }) => (
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

export const PlayerHUD = ({ actor, onPress }) => (
  <TouchableOpacity style={style.playerhud} onPress={() => onPress()}>
    <Image source={actor.portrait} style={style.portrait}/>
    <Progress.Bar
      progress={(actor.status.hp / actor.maxhp)}
      width={null}
      height={4}
      color={(actor.hero ? colors.green : colors.red)}
    />
    <Text style={style.playername}>{actor.name}</Text>
  </TouchableOpacity>
);

export const ActorStack = ({ title, actors, keyname, onPress = () => {}, flipped = false }) =>
  <View style={[ style.actorstack, (flipped ? style.roundedLeft : style.roundedRight) ]}>
    <Text style={style.playername}>{title}</Text>
    {
      actors.map((actor, i) =>
        <TinyActor
          flipped={flipped}
          key={`${keyname}${i}`}
          actor={actor}
          onPress={() => onPress(i)}
          tiny={true}/>
      )
    }
  </View>;

export const TargetPicker = ({ targets, pickTarget }) =>
  <List>
    {
      targets.map(target =>
        <ListItem
          key={target.name}
          avatar={target.portrait}
          title={target.name}
          onPress={() => pickTarget(target)}
        />
      )
    }
  </List>;

const CombatScreen = ({ events, heroes, player, enemies, newEvent }) =>
  <View style={style.screen}>
    <View style={{ flex: 1 }}>
      <ScrollView style={style.eventbox}>
        {
          events.map((event, i) =>
            <CombatEvent
              key={`event${i}`}
              author={event.author}
              action={event.action}
              target={event.target}
            />
          )
        }
      </ScrollView>

      <View style={style.hud}>
        <ActorStack title={"Heróis"} actors={heroes} keyname={"hero"}/>
        <PlayerHUD actor={player}/>
        <ActorStack title={"Inimigos"} actors={enemies} keyname={"enemy"} flipped/>
      </View>
    </View>

    <View style={style.actionDrawer}>
      <Text style={style.playername} >Ações</Text>
      {
        player.actions.map((action, i) =>
          <CombatAction
            key={`action${i}`}
            action={action}
            onPress={newEvent}
          />
        )
      }
    </View>
  </View>;

export default CombatScreen;
