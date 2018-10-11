import React from "react";
const igor = require("../images/logo/logo.png");
const background = require("../images/background/background.png");

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

/* Background: Padrao para a maioria das telas
*/
export const IgorBackground = (content) => (
  <View>
    <ImageBackground
      source={background}
      style={{ width: "100%", height: "100%" }}
      resizeMethod="resize">
      {content}
    </ImageBackground>
  </View>
);

/* Background
*/
export const IgorLogo = (styles) => (
  <View style={styles.igorLayout}>
    <Image
      source={igor}
      resizeMode="contain"
      style={styles.logo}
    />
  </View>
);

/* Fab: Botaozinho que flutua na parte inferior direia da tela
*/
export const Fab = (image, callback) => <Image source={image} onPress={callback}/>;

export const Progress = (props) => <Text>{props.progress}</Text>

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
  <TouchableOpacity>
    <ImageBackground
      source={adventure.image}
      style={{width: '100%', height: '20%'}}
      classname="adventure">
      <Text classname="adv-title">{adventure.title}</Text>
      <Text classname="adv-next-session">{adventure.nextSession}</Text>
      <Progress percentage={progress}/>
    </ImageBackground>
  </TouchableOpacity>);
};

