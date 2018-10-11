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

import {
  IgorBackground,
  IgorLogo
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
