import React from "react";

import {
  View,
  Text,
  ScrollView
} from "react-native";
import {
  ListItem,
  Button,
  List
} from "react-native-elements";

import Icon from "react-native-vector-icons/Entypo";
import Modal from "react-native-modal";

import { Picker } from "../Picker";
import { IgorBackground } from "../Igor";
import style from "./style";

const CombatEditor = ({
  visible,

  heroes,
  enemies,

  addEnemy,
  removeEnemy,
  toggleHero,
  onPressCharacter
}) =>
  <Modal style={style.combatEditor} visible={visible}>
    <View style={style.combatEditorHeader}>
      <Text style={style.combatEditorHeaderText}>Preparar Combate</Text>
      <Icon
        style={style.combatEditorHeaderIcon}
        name="circle-with-plus"
        size={32}
        onPress={() => addEnemy()}/>
    </View>
    <ScrollView style={style.combatEditorScroll}>
      <Text style={style.combatEditorSectionTitle}>Heróis</Text>
      <List style={{ marginBottom: 12 }}>
        { heroes.map((hero, i) =>
          <ListItem
            key={`heroes_${i}`}
            title={hero.name}
            avatar={hero.avatar}
            disabled={hero.dead}
            hideChevron={true}
            switchButton={!hero.dead}
            switched={hero.picked}
            onSwitch={() => toggleHero(i)}
            onPress={() => onPressCharacter(hero)}/>)
        }
      </List>
      <Text style={style.combatEditorSectionTitle}>Inimigos</Text>
      <List>
        { enemies.map((enemy, i) =>
          <ListItem
            key={`enemies_${i}`}
            avatar={enemy.avatar}
            title={enemy.name}
            rightIcon={{ name: "clear" }}
            onPressRightIcon={() => removeEnemy(i)}
            onPress={() => onPressCharacter(enemy)}/>)
        }
      </List>
    </ScrollView>
  </Modal>;

const SessionScreen = ({
  configuringCombat,
  pickingEnemy,
  availableEnemies,

  event,
  history,

  configureCombat,
  addEnemy,
  pickEnemy,
  removeEnemy,
  toggleHero,
  beginCombat
}) =>
  IgorBackground(
    <View style={style.screen}>
      <CombatEditor
        enemies={event.enemies || []}
        heroes={event.heroes || []}
        visible={(configuringCombat === true) && (pickingEnemy === false)}

        toggleHero={toggleHero}
        addEnemy={addEnemy}
        removeEnemy={removeEnemy}
        onPressCharacter={() => {}}
      />

      <Picker
        title={"Adicionar Inimigo"}
        options={availableEnemies || []}
        pick={i => pickEnemy(i)}
        hold={() => {}} // more info
        visible={(pickingEnemy === true)}/>

      <View style={{ flex: 1 }}>
        <Text style={style.screenHeader}> Histórico </Text>
        <List>
          { history.map((event, i) =>
            <ListItem
              key={`heroes_${i}`}
              title={event.type}
            />)

          }
        </List>
      </View>

      <View style={style.actionDrawer}>
        <Text style={style.combatEditorHeaderText}>Ações</Text>

        { !configuringCombat
          ? <Button title="COMBATE" onPress={() => configureCombat()}/>
          : null }

        { configuringCombat && !pickingEnemy
          ? <Button title="INICIAR" onPress={() => beginCombat()}/>
          : null }
      </View>
    </View>
  );

export default SessionScreen;
