import React from "react";
import { connect } from "react-redux";
import styles from "./styles.js";

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button
} from "react-native";
<<<<<<< HEAD

import {
  IgorBackground,
  IgorLogo,
} from "../../../components/Igor";

import {
  requestLogin
} from "../../../actions/user";


const entrar = require("../../../images/buttons/login-entrar.png");

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  updateUserName(text){
    this.setState({
      ...this.state,
      username: text
    });
  }

  updatePassword(text){
    this.setState({
      ...this.state,
      password: text
    });
  }

=======
import styles from "./styles.js";
import Buttons from "../../../components/Buttons-start/Buttons-start"

const igor = require("../../../images/logo/logo.png");
const background = require("../../../images/background/background.png");

class Login extends React.Component {
  static navigationOptions = {
    header:null
  }
>>>>>>> 3a612700f76d486ef8910defb27ee7fb100cbe17
  render() {
    const { navigation } = this.props;
    const { username, password } = this.state;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.loginContainer}>
            <Text style={styles.login}>E-mail:</Text>
            <TextInput
              placeholder="E-mail"
              style={styles.login}
              onChange={(e) => this.updateUserName(e.target.value)}
            />
            <Text style={styles.senha}>Senha:</Text>
            <TextInput
              placeholder="Senha"
              style={styles.senha}
              onChange={(e) => this.updatePassword(e.target.value)}
            />
          </View>
          <View style={styles.buttonsContainer}>
            <View>
              <TouchableOpacity>
                <Image
                  source={entrar}
                  style={styles.entrarimg}
                  resizeMode="contain"
                  onPress={() => requestLogin(username, password)}
                />
                <Button
                  style={styles.buttonLayout}
                  onPress={() => navigation.navigate("Home")}
                  title={"(dev)"}
                />
              </TouchableOpacity>
            </View>
<<<<<<< HEAD
            <View>
              <TouchableOpacity
                style={styles.rest}
                onPress={() => navigation.navigate("Signin")}
              >
                <Text style={styles.restText}>Criar conta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rest}
              >
                <Text style={styles.restText}>Esqueci minha senha</Text>
              </TouchableOpacity>
=======
            <View style={styles.buttonsContainer}>
              <View>
                <Buttons
                  navigate = {()=>{}}
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
>>>>>>> 3a612700f76d486ef8910defb27ee7fb100cbe17
            </View>
          </View>
        </View>
      )
    );
  }
}


const mapStateToProps = (state) => ({

});

// const mapStateToProps = (state) => ({

// })

export default connect(mapStateToProps, { requestLogin })(Login);
