import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
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
        ? arr[0]
        : {
          group: true,
          type: type,
          actions: arr
        }));

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
      progress={(actor.status.hp / actor.maxhp)}
      width={null}
      height={4}
      color={(actor.hero ? colors.yellow : colors.red)}
    />
  </TouchableOpacity>
);

export const PlayerHUD = ({ actor, onPress }) => (
  <TouchableOpacity style={style.playerhud} onPress={() => onPress()}>
    <Text style={style.playername}>{actor.name}</Text>
    <Image source={actor.portrait} style={style.portrait}/>
    <Progress.Bar
      progress={(actor.status.hp / actor.maxhp)}
      width={null}
      height={4}
      color={(actor.hero ? colors.green : colors.red)}
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
          tiny={true}/>
      )
    }
  </View>;

export const TargetPicker = ({ targets, pick }) =>
  <List>
    {
      targets.map(target =>
        <ListItem
          key={target.name}
          avatar={target.portrait}
          title={target.name}
          onPress={() => pick(target.index)}
        />
      )
    }
  </List>;

const CombatScreen = ({ events, heroes, player, enemies, showActionPicker, showTargetPicker, onActionGroup, onChooseAction, onChooseTarget, onFinishAction }) =>
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
        groupByType(player.actions)
          .map((action, i) =>
            <CombatAction
              key={`action${i}`}
              action={action}
              onPress={() =>
                (action.group === true
                  ? onActionGroup(action)
                  : onChooseAction(action))}
            />
          )
      }
    </View>


    <Modal transparent visible={showTargetPicker}>
      <TargetPicker targets={player.hero ? enemies : heroes} pick={onChooseTarget}/>
    </Modal>

    {/* <Modal visible={showActionPicker}>
      <ActionPicker pick={onChooseAction}/>
    </Modal> */}
  </View>;

export default CombatScreen;
