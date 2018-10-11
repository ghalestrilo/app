import React from "react";
const igor = require("../images/logo/logo.png");
const background = require("../images/background/background.png");

import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";

// Util para outras telas tambem. Criar Componente.
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

export const IgorLogo = (styles) => (
  <View style={styles.igorLayout}>
    <Image
      source={igor}
      resizeMode="contain"
      style={styles.logo}
    />
  </View>
);


/* Aventura:
  - Background
  - Nome
  - Proxima sessao
  - Barra de progressao (inline)
*/
export const Adventure = (adventure) => <TouchableOpacity>
  <Image
    source={adventure.image}
    classname="adventure">
    <Text classname="adv-title">{adventure.title}</Text>
    <Text classname="adv-next-session">{adventure.nextSession}</Text>
    <Progress percentage={adventure.progress}/>
  </Image>
</TouchableOpacity>;

export const Fab = (image, callback) => <Image source={image} onPress={callback}/>;
