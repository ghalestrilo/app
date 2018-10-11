import React from "react";
import { connect } from "react-redux";
import styles from "./styles";

import {
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";

import {
  IgorBackground,
  IgorLogo
} from "../../../components/Igor";

const criar = require("../../../images/buttons/signin-criar.png");
// User Reducer as well
const forms = [
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

const Input = (form) => (
  <TextInput
    placeholder={form.name}
    style={styles.inputs}
    on
  />
);

class SignUp extends React.Component {
  state = {
    forms: forms || []
  }

  updateForm(index, text){
    const state = this.state;
    state.forms[index].text = text;
    this.setState(state);
    // this.setState({
    //   ...this.state,
    //   forms: this.state.forms.map((f, i) =>
    //     (i === index)
    //       ? { ...f, text: text}
    //       : f)
    // })
  }

  render() {
    // const { forms } = this.props
    const { forms } = this.state;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.buttonsContainer}>
            { forms.map((form, index) =>
              <TextInput
                placeholder={form.name}
                style={styles.inputs}
                onChange={(e) => this.updateForm(index, e.target.value)}/>) }
            <TouchableOpacity style={{ alignItems: "flex-end" }}>
              <Image
                source={criar}
                style={styles.image}
                resizeMode="contain"
              />
            </TouchableOpacity>
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
