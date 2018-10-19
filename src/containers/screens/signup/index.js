import React from "react";
import { connect } from "react-redux";
import styles from "./styles.js";

import {
  View
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
  requestSignup
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
class Signup extends React.Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
      name: ""
    };
    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordConfirm = this.updatePasswordConfirm.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.updateName = this.updateName.bind(this);
    this.signup = this.signup.bind(this);
  }

  updateUserName(text){
    this.setState({
      ...this.state,
      username: text
    });
  }

  updateName(text){
    this.setState({
      ...this.state,
      name: text
    });
  }

  updatePassword(text){
    this.setState({
      ...this.state,
      password: text
    });
  }

  updatePasswordConfirm(text){
    this.setState({
      ...this.state,
      passwordConfirm: text
    });
  }

  signup() {
    const user = {
      name: this.state.name,
      password: this.state.password,
      username: this.state.username
    };
    requestSignup(user);
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
            <FormLabel>Nome</FormLabel>
            <FormInput value={this.state.name} onChangeText={this.updateName}/>
            <FormLabel>Usuário</FormLabel>
            <FormInput value={this.state.username} onChangeText={this.updateUserName}/>
            <FormLabel>Senha</FormLabel>
            <FormInput value={this.state.password} secureTextEntry={true} onChangeText={this.updatePassword}/>
            <FormLabel>Confirmar Senha</FormLabel>
            <FormInput value={this.state.passwordConfirm} secureTextEntry={true} onChangeText={this.updatePasswordConfirm}/>
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
              <MainMenuButton
                title="CADASTRO"
                onPress={this.signup}
              />
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

export default connect(mapStateToProps, { requestSignup })(Signup);
