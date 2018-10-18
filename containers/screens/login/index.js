import React from "react";
import { connect } from "react-redux";
import {
  Text, View, ImageBackground, TouchableOpacity, TextInput, Image
} from "react-native";
import styles from "./styles.js";
import Buttons from "../../../components/Buttons-start/Buttons-start"

const igor = require("../../../images/logo/logo.png");
const background = require("../../../images/background/background.png");

class Login extends React.Component {
  static navigationOptions = {
    header:null
  }
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
                secureTextEntry = {true}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <View>
                <Buttons
                  navigate = {()=>this.props.navigation.navigate("Drawer")}
                  title = "ENTRAR"
                />
              </View>
              <View>
                <TouchableOpacity
                  style={styles.rest}
                  onPress={() => this.props.navigation.navigate("Signup")}
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


const mapStateToProps = (state) => ({

})
//export default Login;
export default connect(mapStateToProps)(Login);
