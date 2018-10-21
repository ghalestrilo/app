import React from "react";
import { connect } from "react-redux";
import styles from "./styles";

import {
  SafeAreaView
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
    destination: "Adventures"
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
        <SafeAreaView style={styles.container}>
          <IgorLogo/>
          <SafeAreaView style={styles.loginContainer}>
            <Input
              title="E-mail"
              onChange={(text) => this.updateUserName(text)}/>
            <Input
              title="Senha"
              type="password"
              onChange={(text) => this.updatePassword(text)}/>
          </SafeAreaView>
          <SafeAreaView style={styles.buttonsContainer}>
            <SafeAreaView>
              {mainoptions.map((option, key) =>
                <MainMenuButton
                  key={key}
                  title={option.title}
                  onPress={() => navigation.navigate(option.destination)}/>)
              }
            </SafeAreaView>
            <SafeAreaView>
              {otheroptions.map((option, key) =>
                <RestButton
                  key={key}
                  title={option.title}
                  navigate={() => navigation.navigate(option.destination)}/>)
              }
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      )
    );
  }
}


const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { requestLogin })(Login);
