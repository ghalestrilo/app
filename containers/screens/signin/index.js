import React from "react";
import {
  View, ImageBackground, TouchableOpacity, TextInput, Image
} from "react-native";
import styles from "./styles";

const criar = require("../../images/buttons/signin-criar.png");
const igor = require("../../images/logo/logo.png");
const background = require("../../images/background/background.png");


const Inputs = ({ children }) => (
  <TextInput
    placeholder={children}
    style={styles.inputs}
  />
);

// static navigationOptions = {
//   header: null,
// };
class Signup extends React.Component {
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
              <Inputs> E-mail</Inputs>
              <Inputs> Senha</Inputs>
              <Inputs> Nome do Usuario</Inputs>
              <Inputs> Data de Nascimento</Inputs>
              <Inputs> Sexo</Inputs>
              <TouchableOpacity style={{ alignItems: "flex-end" }}>
                <Image
                  source={criar}
                  style={styles.image}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Signup;
