import React from "react";
const igor = require("../images/logo/logo.png");
const background = require("../images/background/background.png");
import Icon from "react-native-vector-icons/Entypo";
import MCIIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../styles";

import styles from "./igorstyles.js";

import {
  FormLabel,
  FormInput
} from "react-native-elements";

import {
  SafeAreaView,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  View,
  TouchableHighlight
} from "react-native";

/* Background: Padrao para a maioria das telas
*/
export const IgorBackground = (content) => (
  <SafeAreaView style={{ backgroundColor: "rgb(34,17,51)" }}>
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMethod="resize">
      {content}
    </ImageBackground>
  </SafeAreaView>
);

/* Background com aba de navegação: Padrao para a maioria das telas
*/
export const TabBarNavigation = (props) => (
  <View style={{ width: "100%", height: 75, backgroundColor: colors.drawerbackground }}>
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
      <View style={{ width: 75, height: 75, backgroundColor: colors.drawerbackground }}>
        <TouchableHighlight
          style={{ flex: 1, justifyContent: "center" }}
          onPress={props.navigate}>
          <Icon
            name="menu"
            size= {35}
            color="white"/>
        </TouchableHighlight>
      </View>
      <View style={{
        justifyContent: "center",
        alignItems: "center" }}>
        <Text style = {{
          color: colors.yellow,
          fontSize: 20 }}>
                IGOR
        </Text>
      </View>
      <View style={{ width: 75, height: 75, backgroundColor: colors.drawerbackground }}>
        <TouchableHighlight
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
          onPress={props.edit}>
          <Icon
            name="edit"
            size= {35}
            color= {(props.color== null ? "white": props.color)}/>
        </TouchableHighlight>
      </View>
    </View>
  </View>
);

/* Background
*/
export const IgorLogo = () => (
  <SafeAreaView style={styles.igorLayout}>
    <Image
      source={igor}
      resizeMode="contain"
      style={styles.logo}
    />
  </SafeAreaView>
);

/* Fab: Botaozinho que flutua na parte inferior direia da tela
*/
export const Fab = (props) => (
  <SafeAreaView>
    <TouchableOpacity
      classname="fab"
      style={styles.fab}
      onPress={() => props.onPress()}>
      <Image
        source={ props.source }
        style={{ width: "100%", height: "100%" }}/>
    </TouchableOpacity>
  </SafeAreaView>
);

export const Progress = (props) => <Text classname="progbar">{props.progress}</Text>;

export const Input = (props) => (
  // TODO: Slant Behaviour
  // (props.text === '')
  //   ?
  //   :
  <SafeAreaView>
    <FormLabel>{props.title}</FormLabel>
    <FormInput secureTextEntry={props.type === "password"} value={props.value}
      autoCorrect={false} autoCapitalize="none" onChangeText={props.onChange}/>
  </SafeAreaView>
);

export const TextOverlay = (text) => (<Text style={styles.overlay}>{text}</Text>);

/* Aventura:
  - Background
  - Nome
  - Proxima sessao
  - Barra de progressao (inline)
*/

export const Adventure = ({ props }) => {
  if (!props) return null;
  // const progress = (props.progress < 100)
  //   ? props.progress
  //   : 100;
  return (
    <TouchableOpacity
      key={props.title}
      onPress={() => props.onPress()}>
      <ImageBackground
        source={props.image}
        style={{ width: "100%", height: 128 }}
        key={props.image}
        classname="adventure">
        <Text>{props.title}</Text>

        <Text>{"Próxima Sessão: " + props.nextSession}</Text>

        <Text>{"Progresso: " + props.progress}</Text>
      </ImageBackground>
    </TouchableOpacity>);
};

export const EditAdventure = ({ props }) => {
  if (!props) return null;
  // const progress = (props.progress < 100)
  //   ? props.progress
  //   : 100;
  return (
    <ImageBackground
      source={props.image}
      style={{ width: "100%", height: 128 }}
      key={props.image}
      classname="adventure">
      <Text>{props.title}</Text>

      <Text>{"Próxima Sessão: " + props.nextSession}</Text>

      <Text>{"Progresso: " + props.progress}</Text>
      <TouchableOpacity
        style = {styles.delete}
        onPress={() => props.onPress()}>
        <MCIIcons
          name="delete-empty"
          size= {35}
          color= "white"/>
      </TouchableOpacity>
    </ImageBackground>);
};

export const MainMenuButton = (props) => (
  <TouchableOpacity
    key={props.title + "Button"}
    style={styles.buttonLayout}
    onPress={props.onPress}
  >
    <Text style = {styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

export const RestButton = (props) => (
  <TouchableOpacity
    key={props.title + "Button"}
    style={styles.rest}
    onPress={props.navigate}
  >
    <Text style = {styles.restText}>{props.title}</Text>
  </TouchableOpacity>
);
