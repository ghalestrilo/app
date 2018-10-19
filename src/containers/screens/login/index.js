import React from "react";
import { connect } from "react-redux";
import styles from "./styles.js";

import {
  View,
  TouchableOpacity,
  Text
} from "react-native";

import {
  FormInput,
  FormLabel
} from "react-native-elements";

import {
  IgorBackground,
  IgorLogo,
  MainMenuButton,
  RestButton
} from "../../../components/Igor";

import {
  requestLogin
} from "../../../actions/user";

// Constants
// const mainoptions = [
//   {
//     title: "ENTRAR",
//     destination: "Login"
//   },
//   {
//     title: "DEV",
//     destination: "Home"
//   }
// ];

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
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.login = this.login.bind(this);
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

  login() {
    requestLogin(this.state.username, this.state.password);
  }

  render() {
    const { navigation } = this.props;

    // This is for the action call
    // const { username, password } = this.state;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.loginContainer}>
            <FormLabel>Usuário</FormLabel>
            <FormInput value={this.state.username} onChangeText={this.updateUserName}/>
            <FormLabel>Senha</FormLabel>
            <FormInput value={this.state.password} secureTextEntry={true} onChangeText={this.updatePassword}/>
            {/* <Text style={styles.login}>E-mail:</Text>
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
            /> */}
          </View>
          <View style={styles.buttonsContainer}>
            <View>
              <TouchableOpacity
                style={styles.buttonLayout}
                onPress={this.login}
              >
                <Text style = {styles.buttonText}>ENTRAR</Text>
              </TouchableOpacity>
            </View>
            <View>
              {otheroptions.map((option, i) =>
                <RestButton
                  key={i}
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


const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { requestLogin })(Login);
