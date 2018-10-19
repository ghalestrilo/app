import React from "react";
const igor = require("../images/logo/logo.png");
const background = require("../images/background/background.png");

import styles from "./igorstyles.js";

import {
  FormLabel,
  FormInput
} from "react-native-elements";

import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

/* Background: Padrao para a maioria das telas
*/
export const IgorBackground = (content) => (
  <View>
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMethod="resize">
      {content}
    </ImageBackground>
  </View>
);

/* Background
*/
export const IgorLogo = (overrides) => {
  return <View style={styles.igorLayout}>
    <Image
      source={igor}
      resizeMode="contain"
      style={styles.logo}
    />
  </View>;
};

/* Fab: Botaozinho que flutua na parte inferior direia da tela
*/
export const Fab = (image, callback) => <Image classname="fab" source={image} onPress={callback}/>;

export const Progress = (props) => <Text classname="progbar">{props.progress}</Text>;

export const Input = (props) => (
  // TODO: Slant Behaviour
  // (props.text === '')
  //   ?
  //   :
  <View>
    <FormLabel>{props.title}</FormLabel>
    <FormInput secureTextEntry={props.type === "password"} onChangeText={props.onChange}/>
  </View>
);
/* Aventura:
  - Background
  - Nome
  - Proxima sessao
  - Barra de progressao (inline)
*/
export const Adventure = (adventure) => {
  if (!adventure) return null;
  const progress = (adventure.progress < 100)
    ? adventure.progress
    : 100;


  return (
    <TouchableOpacity key={adventure.title}>
      <ImageBackground
        source={adventure.image}
        style={{ width: "100%", height: "20%" }}
        classname="adventure">
        <Text classname="adv-title">{adventure.title}</Text>
        <Text classname="adv-next-session">{adventure.nextSession}</Text>
        <Progress percentage={progress}/>
      </ImageBackground>
    </TouchableOpacity>);
};


export const MainMenuButton = (props) => (
  <TouchableOpacity
    style={styles.buttonLayout}
    onPress={props.onPress}
  >
    <Text style = {styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

export const RestButton = (props) => (
  <TouchableOpacity
    style={styles.rest}
    onPress={props.navigate}
  >
    <Text style = {styles.restText}>{props.title}</Text>
  </TouchableOpacity>
);
