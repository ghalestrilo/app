import React from "react";
import { connect } from "react-redux";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import styles from "./styles";

const criar = require("../../../images/buttons/signin-criar.png");
const igor = require("../../../images/logo/logo.png");
const background = require("../../../images/background/background.png");

// User Reducer as well
const forms = [
 {
   name: "E-mail",
   text: '',
   valid: false
  },
 {
   name: "Senha",
   text: '',
   valid: false
  },
 {
   name: "Nome do Usuario",
   text: '',
   valid: false
  },
 {
   name: "Data de Nascimento",
   text: '',
   valid: false
  },
 {
   name: "Sexo",
   text: '',
   valid: false
  },
]

const Input = ({ children }) => (
  <TextInput
    placeholder={children}
    style={styles.inputs}
  />
);

// Util para outras telas tambem. Criar Componente
const IgorBackground = (content) => (
  <View>
    <ImageBackground
      source={background}
      style={{ width: "100%", height: "100%" }}
      resizeMethod="resize">
      {content}
    </ImageBackground>
  </View>
)

const IgorLogo = (styles) => (
  <View style={styles.igorLayout}>
    <Image
      source={igor}
      resizeMode="contain"
      style={styles.logo}
    />
  </View>
)

class SignUp extends React.Component {
  render() {
    const { forms } = this.props
    return (
      <IgorBackground>
        <View style={styles.container}>
          <IgorLogo styles={styles}/>
          <View style={styles.buttonsContainer}>
            { forms.map(form => (<Input>{form.title}</Input>)) }
            <TouchableOpacity style={{ alignItems: "flex-end" }}>
              <Image
                source={criar}
                style={styles.image}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
    </IgorBackground>);
  }
}

const mapStateToProps = (state) => ({
  forms: state.user.forms
})

export default connect(mapStateToProps)(SignUp);
