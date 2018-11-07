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
  login as LoginUser
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
      password: "",
      loading: false
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
  }
  loginUser() {
    const { LoginUser, navigation } = this.props;
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    LoginUser(user);
    console.log(this.props.user);
  }

  render() {
    const { navigation, user } = this.props;
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
                  onPress={this.loginUser}
                  loading={user.loading}/>)
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


const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { LoginUser })(Login);
