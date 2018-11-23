import React from "react";
import { connect } from "react-redux";
import styles from "./styles";
import { addUser as RegisterUser } from "../../../actions/user";

import {
  SafeAreaView
} from "react-native";

import {
  IgorLogo,
  MainMenuButton,
  Input,
  IgorBackground
} from "../../../components/Igor";

// Constants
const signupForms = [
  {
    name: "Nome do Usuario",
    state: "name",
    text: "",
    valid: false
  },
  {
    name: "Username",
    state: "email",
    text: "",
    valid: false
  },
  {
    name: "Senha",
    state: "password",
    text: "",
    type: "password",
    valid: false
  },
  {
    name: "Confirmar Senha",
    state: "confirmPassword",
    text: "",
    type: "password",
    valid: false
  },
  {
    name: "Data de Nascimento",
    state: "birth",
    text: "",
    valid: false
  }
];

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      password: "",
      email: "",
      name: "",
      confirmPassword: "",
      birth: ""
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
  }
  register = async () => {
    const { RegisterUser, navigation } = this.props;
    this.state.email = this.state.email.replace(/[`~!#$@%^&*()|+\-=?;:'",.<>{}[\]\\/]/gi, "");
    const { email, password, name, confirmPassword, birth } = this.state;
    if (email && password && name && confirmPassword && birth) {
      if (password === confirmPassword) {
        try {
          await RegisterUser(this.state);
          navigation.navigate("Start");
        } catch (error) {
          console.warn(error);
        }
      } else {
        console.warn("A senhas não conicidem");
      }
    } else {
      console.warn("Todos os campos devem ser preenchidos");
    }
  }

  render() {
    return (
      IgorBackground(
        <SafeAreaView style={styles.container}>
          <IgorLogo/>
          <SafeAreaView style={styles.buttonsContainer}>
            { signupForms.map((form, index) =>
              (<Input
                key={index}
                title={form.name}
                type={form.type ? form.type : null}
                onChange={(text) => this.handleFormChange(text, form.state)}/>))
            }
            <MainMenuButton
              onPress={this.register}
              title = "CRIAR"
            />
          </SafeAreaView>
        </SafeAreaView>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

export default connect(mapStateToProps, { RegisterUser })(SignUp);
