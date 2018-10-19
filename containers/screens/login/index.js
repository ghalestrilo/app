import React from "react";
import { connect } from "react-redux";
import styles from "./styles.js";

import {
  View
} from "react-native";

import {
  IgorBackground,
  IgorLogo,
  MainMenuButton,
  RestButton,
  Input
} from "../../../components/Igor";

import {
  requestLogin
} from "../../../actions/user";

// Constants
const mainoptions = [
  {
    title: "ENTRAR",
    destination: "Login"
  },
  {
    title: "DEV",
    destination: "Home"
  }
];

const otheroptions = [
  {
    title: "Criar conta",
    destination: "Signup"
  },
  {
    title: "Esqueci minha senha",
    destination: "Login"
  }
];

// Class
class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    username: "",
    password: ""
  }

  updateUserName = (text) =>
    this.setState({
      ...this.state,
      username: text
    });

  updatePassword = (text) =>
    this.setState({
      ...this.state,
      password: text
    });

  render() {
    const { navigation } = this.props;

    // This is for the action call
    // const { username, password } = this.state;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.loginContainer}>
            <Input
              title="E-mail"
              onChange={(text) => this.updateUserName(text)}/>
            <Input
              title="Senha"
              onChange={(text) => this.updatePassword(text)}/>
          </View>
          <View style={styles.buttonsContainer}>
            <View>
              {mainoptions.map(option =>
                <MainMenuButton
                  title={option.title}
                  onPress={() => navigation.navigate(option.destination)}/>)
              }
            </View>
            <View>
              {otheroptions.map(option =>
                <RestButton
                  title={option.title}
                  navigate={() => navigation.navigate(option.destination)}/>)
              }
            </View>
          </View>
        </View>
      )
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { requestLogin })(Login);
