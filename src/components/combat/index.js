import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import {
  List,
  ListItem,
  Button
} from "react-native-elements";

import Modal from "react-native-modal";

import * as Progress from "react-native-progress";
import { colors } from "../../styles";
import style from "./style";
// const arrow = require("../../images/combat/arrow.png");

const warn = value => {
  console.warn(value);
  return value;
};

const log = value => {
  console.log(value);
  return value;
};

const groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const groupByType = actions =>
  Object.entries(groupBy(actions, "type"))
    .map(([ type, arr ]) =>
      (arr.length < 2
        ? {
          ...arr[0],
          type: (arr[0].name || arr[0].type)
        }
        : {
          group: true,
          type: type,
          options: arr
        }));

export const CombatEvent = ({ author, action, target }) =>
  <View style={style.event}>
    <Image style={style.circle} source={author.avatar}/>
    <Text style={style.eventAction}> {action.type} </Text>
    {action.damage ? <Text style={[ style.eventAction, style.redText ]}> {action.damage} </Text> : null}
    {action.healing ? <Text style={[ style.eventAction, style.greenText ]}> {action.healing} </Text> : null}
    <Image style={style.circle} source={target.avatar}/>
  </View>;

export const CombatAction = ({ action, onPress }) =>
  <Button
    title={action.type.toUpperCase()}
    onPress={() => onPress()}
  />;

// Flipped for names on left, right-justified
export const TinyActor = ({ actor, onPress, flipped, frozen = false }) => (
  <TouchableOpacity
    style={[
      style.tinyactor,
      (frozen ? style.frozen : null)
    ]}
    onPress={() => onPress()}>
    <Image style={style.portrait} source={actor.avatar}/>
    {/* <ListItem
      avatarRight={(flipped === true) ? actor.avatar : null }
      avatarLeft={(flipped !== true) ? actor.avatar : null }
      title={actor.name}/> */}
    <Progress.Bar
      progress={(actor.status.hp / actor.maxhp)}
      width={null}
      height={4}
      color={(actor.hero ? colors.yellow : colors.red)}
    />
  </TouchableOpacity>
);

export const ActorList = ({ title, actors, keyname, onPress = () => {}, flipped = false }) =>
  <View style={[ style.actorlist, (flipped ? style.roundedLeft : style.roundedRight) ]}>
    <Text style={style.playername}>{title}</Text>
    {
      actors.map((actor, i) =>
        <TinyActor
          flipped={flipped}
          key={`${keyname}${i}`}
          actor={actor}
          onPress={() => onPress(i)}
          tiny={true}
          frozen={(actor.effects || []).filter(x => x.type === "freeze") !== []}
        />
      )
    }
  </View>;

export const PlayerHUD = ({ actor, onPress }) => (
  <TouchableOpacity style={style.playerhud} onPress={() => onPress()}>
    <Text style={style.playername}>{actor.name}</Text>
    <Image source={actor.avatar} style={style.portrait}/>
    <Progress.Bar
      progress={(actor.status.hp / actor.maxhp)}
      width={null}
      height={8}
      color={(actor.hero ? colors.green : colors.red)}
    />
  </TouchableOpacity>
);

export const Picker = ({ visible, options, pick, title }) =>
  <Modal style={style.picker} isVisible={visible}>
    <View style={{ flex: 1 }}>
      <Text style={style.pickerTitle}>{title}</Text>
      <List>
        {
          options.map((option, index) =>
            <ListItem
              key={`${option.name}_${index}`}
              title={option.name}
              onPress={() => pick(option.index)}
              avatar={option.avatar}
            />
          )
        }
      </List>
    </View>
  </Modal>;

const CombatScreen = ({
  events, heroes, player, enemies, actions, // Data
  showActionPicker, showTargetPicker, // Display
  onActionGroup, onChooseAction, onChooseTarget, onFinishAction // Callbacks
}) =>
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
        <ActorList title={"Heróis"} actors={heroes} keyname={"hero"}/>
        <PlayerHUD actor={player}/>
        <ActorList title={"Inimigos"} actors={enemies} keyname={"enemy"} flipped/>
      </View>
    </View>

    <View style={style.actionDrawer}>
      <Text style={style.playername}>Ações</Text>
      {
        log(groupByType(player.actions))
          .map((action, i) =>
            <CombatAction
              key={`action${i}`}
              action={action}
              onPress={() =>
                (action.group === true
                  ? onActionGroup(action.options)
                  : onChooseAction(action))}
            />
          )
      }
    </View>

    <Picker
      title={"Alvo"}
      pick={onChooseTarget}
      visible={showTargetPicker}
      options={player.hero ? enemies : heroes}
    />
    <Picker
      title={"Ação"}
      pick={onChooseAction}
      visible={showActionPicker}
      options={actions || []}
    />
  </View>;

export default CombatScreen;
