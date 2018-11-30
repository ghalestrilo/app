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
  heroes,
  enemies,

  addEnemy,
  removeEnemy,
  toggleHero,
  onPressCharacter,

  beginCombat
}) =>
  <View style={style.combatEditor}>
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
    <View style={style.combatEditorStartButton}>
      <Button title="INICIAR!" onPress={beginCombat}/>
    </View>
  </View>;

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
}) => IgorBackground(
  <View style={style.screen}>
    <Modal isVisible={configuringCombat === true}>
      { (pickingEnemy === true)
        ? <Picker
          title={"Adicionar Inimigo"}
          options={availableEnemies || []}
          pick={i => pickEnemy(i)}
          hold={() => {}} // more info
        />
        : null
      }

      { (configuringCombat === true && !pickingEnemy)
        ? <CombatEditor
          enemies={event.enemies || []}
          heroes={event.heroes || []}

          toggleHero={toggleHero}
          addEnemy={addEnemy}
          removeEnemy={removeEnemy}
          onPressCharacter={() => {}}

          beginCombat={beginCombat}
        />
        : null
      }
    </Modal>

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
      <Button title="COMBATE" onPress={configureCombat}/>
    </View>
  </View>
);

export default SessionScreen;
