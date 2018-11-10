import React from "react";
import { connect } from "react-redux";
import styles from "./styles";

import {
  SafeAreaView
} from "react-native";

import {
  IgorLogo,
  MainMenuButton,
  RestButton,
  Input,
  IgorBackground
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
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    // This is for the action call
    // const { username, password } = this.state;
    return (
      IgorBackground(
        <SafeAreaView style={styles.container}>
          <IgorLogo/>
          <SafeAreaView style={styles.loginContainer}>
            <Input
              title="E-mail"
              value={email}
              onChange={(text) => this.handleFormChange(text, "email")}/>
            <Input
              title="Senha"
              type="password"
              value={password}
              onChange={(text) => this.handleFormChange(text, "password")}/>
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
