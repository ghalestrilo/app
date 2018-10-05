import React from "react";
import {
  View, ImageBackground, Image, Button
} from "react-native";
import styles from "./styles";

const background = require("../../images/background/background.png");
const igor = require("../../images/logo/logo.png");

export default class Start extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={background}
          style={{ width: "100%", height: "100%" }}
          resizeMethod="resize"
        >
          <View style={styles.container}>
            <View style={styles.igorLayout}>
              <Image
                source={igor}
                resizeMode="contain"
                style={styles.logo}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                onPress={() => this.props.navigation.navigate("Login")}
                style={styles.buttonLayout}
                title="Login"
              />
              <Button
                onPress={() => this.props.navigation.navigate("Signin")}
                style={styles.buttonLayout}
                title="Cadastro"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


