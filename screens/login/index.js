import React from "react";
import {
  Text, View, ImageBackground, TouchableOpacity, TextInput, Image
} from "react-native";
import styles from "./styles.js";

const igor = require("../../images/logo/logo.png");
const entrar = require("../../images/buttons/login-entrar.png");
const background = require("../../images/background/background.png");

export default class Login extends React.Component {
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
            <View style={styles.loginContainer}>
              <Text style={styles.login}>E-mail:</Text>
              <TextInput
                placeholder="E-mail"
                style={styles.login}
              />
              <Text style={styles.senha}>Senha:</Text>
              <TextInput
                placeholder="Senha"
                style={styles.senha}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <View>
                <TouchableOpacity>
                  <Image
                    source={entrar}
                    style={styles.entrarimg}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.rest}
                  onPress={() => this.props.navigation.navigate("Signin")}
                >
                  <Text style={styles.restText}>Criar conta</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.rest}
                >
                  <Text style={styles.restText}>Esqueci minha senha</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}


