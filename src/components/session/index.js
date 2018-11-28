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


  configureCombat,
  addEnemy,
  removeEnemy,
  toggleHero
}) =>
  <Modal style={style.combatEditor} visible={visible}>
    <View style={style.combatEditorHeader}>
      <Text style={style.combatEditorHeaderText}>Preparar Combate</Text>
      <Icon
        style={style.combatEditorHeaderIcon}
        name="circle-with-plus"
        size={32}
        onPress={addEnemy}/>
    </View>
    <ScrollView style={style.combatEditorScroll}>
      <Text style={style.combatEditorSectionTitle}>Heróis</Text>
      <List style={{ marginBottom: 12 }}>
        { heroes.map((hero, i) =>
          <ListItem
            title={hero.name}
            avatar={hero.avatar}
            disabled={hero.dead}
            hideChevron={true}
            switchButton={!hero.dead}
            switched={hero.picked}
            onSwitch={() => toggleHero(i)}
            onPress={() => {}}/>)
        }
      </List>
      <Text style={style.combatEditorSectionTitle}>Inimigos</Text>
      <List>
        { enemies.map((enemy, i) =>
          <ListItem avatar={enemy.avatar} title={enemy.name} onPress={() => {}}>
            <Button title={"remove"} onPress={() => removeEnemy(i)}/>
          </ListItem>)
        }
      </List>
    </ScrollView>
  </Modal>;

const SessionScreen = ({
  configuringCombat,
  pickingEnemy,
  enemyCatalog = [],

  event,

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
        visible={configuringCombat && !pickingEnemy}

        toggleHero={toggleHero}
        addEnemy={addEnemy}
        removeEnemy={removeEnemy}
      />

      <Picker
        title={"Adicionar Inimigo"}
        options={enemyCatalog}
        pick={i => pickEnemy(i)}
        visible={pickingEnemy}/>

      {/* ------------------ CLEANUP ------------------ */}
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 40 }}> Hello </Text>
      </View>
      {/* --------------------------------------------- */}

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
