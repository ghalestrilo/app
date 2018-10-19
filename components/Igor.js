import React from "react";
const igor = require("../images/logo/logo.png");
const background = require("../images/background/background.png");

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
  TouchableOpacity
} from "react-native";

/* Background: Padrao para a maioria das telas
*/
export const IgorBackground = (content) => (
  <SafeAreaView>
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMethod="resize">
      {content}
    </ImageBackground>
  </SafeAreaView>
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
    <FormInput secureTextEntry={props.type === "password"} onChangeText={props.onChange}/>
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
  const progress = (props.progress < 100)
    ? props.progress
    : 100;
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

        <Text>{"Próxima Sessão: " + props.title}</Text>

        <Text>{"Progresso: " + props.progress}</Text>
      </ImageBackground>
    </TouchableOpacity>);
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
