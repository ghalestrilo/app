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
    const { LoginUser } = this.props;
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
    LoginUser(user);
  }
  componentWillUpdate(nextProps) {
    if (nextProps.user && nextProps.user.email && nextProps.user.password) {
      this.props.navigation.navigate("Adventures");
    }
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
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
                  loading={this.state.loading}/>)
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
