import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";

import { Button } from "react-native-elements";

import * as Progress from "react-native-progress";
import { colors } from "../../styles";
import style from "./style";
import { IgorBackground } from "../Igor";
import { PickerModal } from "../Picker";
import { groupByType } from "../../util/groupBy";

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

const CombatScreen = ({
  events, heroes, player, enemies, actions, // Data
  showActionPicker, showTargetPicker, // Display
  onActionGroup, onChooseAction, onChooseTarget, onFinishAction // Callbacks
}) => IgorBackground(
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
                  ? onActionGroup(action.options)
                  : onChooseAction(action))}
            />
          )
      }
    </View>

    <PickerModal
      title={"Alvo"}
      pick={onChooseTarget}
      visible={showTargetPicker}
      options={player.hero ? enemies : heroes}
    />
    <PickerModal
      title={"Ação"}
      pick={onChooseAction}
      visible={showActionPicker}
      options={actions || []}
      reindexed={true}
    />
  </View>);

export default CombatScreen;
