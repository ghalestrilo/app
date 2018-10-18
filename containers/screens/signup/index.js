import React from "react";
import { connect } from "react-redux";
import styles from "./styles";

import {
  View
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
    name: "E-mail",
    text: "",
    valid: false
  },
  {
    name: "Senha",
    text: "",
    valid: false
  },
  {
    name: "Nome do Usuario",
    text: "",
    valid: false
  },
  {
    name: "Data de Nascimento",
    text: "",
    valid: false
  },
  {
    name: "Sexo",
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

  updateForm = (index, text) =>
    this.setState({
      forms: this.state.forms.map(
        (form, i) => (i === index)
          ? { ...form, text: text }
          : form )
    })


  render() {
    // const { forms } = this.props
    const { forms } = this.state;
    if (!forms) return null;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.buttonsContainer}>
            {/* { forms.map((form, index) => (<Input onChange={this.updateForm.apply(index)}>{form.name}</Input>)) } */}

            { forms.map((form, index) =>
              (<Input
                title={form.name}
                onChange={() => this.updateForm(index)}/>))
            }
            <MainMenuButton
              navigate = {() => {}}
              title = "CRIAR"
            />
          </View>
        </View>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  // forms: state.user.forms
});

export default connect(mapStateToProps)(SignUp);
