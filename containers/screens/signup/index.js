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
  Input
} from "../../../components/Igor";

// Constants
const signupForms = [
  {
    name: "Nome do Usuario",
    text: "",
    valid: false
  },
  {
    name: "E-mail",
    text: "",
    valid: false
  },
  {
    name: "Senha",
    text: "",
    type: "password",
    valid: false
  },
  {
    name: "Confirmar Senha",
    text: "",
    type: "password",
    valid: false
  },
  {
    name: "Data de Nascimento",
    text: "",
    valid: false
  }
];

class SignUp extends React.Component {
  static navigationOptions = {
    header: null
  }
  state = {
    forms: signupForms
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }
  register = () => {
    console.warn(this.state);
  }

  render() {
    // const { forms } = this.props
    const { forms } = this.state;
    if (!forms) return null;
    return (
      IgorBackground(
        <SafeAreaView style={styles.container}>
          <IgorLogo/>
          <SafeAreaView style={styles.buttonsContainer}>
            {/* { forms.map((form, index) => (<Input onChange={this.updateForm.apply(index)}>{form.name}</Input>)) } */}

            { forms.map((form, index) =>
              (<Input
                key={index}
                title={form.name}
                type={form.type ? form.type : null}
                onChange={() => this.updateForm(index)}/>))
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
  
});

export default connect(mapStateToProps)(SignUp);
