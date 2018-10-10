import React from "react";
import { connect } from "react-redux";
import {
  View,
  ImageBackground,
  Image,
  Button
} from "react-native";
import styles from "./styles";

// Isolei essa variavel por flexibilidade
// O plano seria migra-las para a store
const background = require("../../../images/background/background.png");
const igor = require("../../../images/logo/logo.png");
const options = [
  {
    title: "Login",
    destination: "Login"
  },
  {
    title: "Cadastro",
    destination: "Signin"
  }
]

class Start extends React.Component {
  render() {
    let { navigation } = this.props
    return (
      <View>
        <ImageBackground
          source={background}
          style={styles.background}
          resizeMethod="resize"
        >
          <View style={styles.container}>
            <View style={styles.igorLayout}>
              <Image
                source={igor}
                resizeMode="contain"
                style={styles.logo}
              />
            </View>
            <View style={styles.buttonsContainer}>
              {options.map(option =>
                (<Button
                  style={styles.buttonLayout}
                  onPress={() => navigation.navigate(option.destination)}
                  title={option.title}
                  />))}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  // options: state.start.options
})

export default connect(mapStateToProps)(Start);
