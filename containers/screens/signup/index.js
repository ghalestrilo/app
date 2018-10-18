import React from "react";
import { connect } from "react-redux";
import {
  View,
  ImageBackground,
  TextInput,
  Image
} from "react-native";

import styles from "./styles";
import Buttons from "../../../components/Buttons-start/Buttons-start"

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

const Input = (props) => (
  <TextInput
    placeholder={props.children}
    style={styles.inputs}
    autoCapitalize = {props.autoCapitalize}
    secureTextEntry = {props.children === 'Senha'}
  />
);

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
  static navigationOptions = {
    header:null
  }
  render(){
    return(
        <View> 
            <ImageBackground
            source = {background}
            style = {{width: '100%', height: '100%'}}
            resizeMethod="resize"
            >
                <View style = {styles.container}>
                    <View style = {styles.igorLayout}>
                        <Image
                            source = {igor}
                            resizeMode = 'contain'
                            style = {styles.logo}
                        />
                    </View>
                    <View style = {styles.buttonsContainer}>
                        {forms.map(form => <Input key = {form.name}
                          children = {form.name}
                          autoCapitalize = 'none'
                        ></Input>)}
                        <Buttons 
                          navigate = {() => {}}
                          title = 'CRIAR'
                        />
                    </View>  
                </View>
            </ImageBackground>
        </View>
    );  
  }
}

const mapStateToProps = (state) => ({
  forms: state.user.forms
})
//export default SignUp;
export default connect(mapStateToProps)(SignUp);
