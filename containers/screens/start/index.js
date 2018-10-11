import React from "react";
import { connect } from "react-redux";
import {
  View,
  Button
} from "react-native";

import {
  IgorBackground,
  IgorLogo
} from "../../../components/Igor";

import styles from "./styles";

// Isolei essa variavel por flexibilidade
// O plano seria migra-las para a store
const options = [
  {
    title: "Login",
    destination: "Login"
  },
  {
    title: "Cadastro",
    destination: "Signup"
  }
];

class Start extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.buttonsContainer}>
            {options.map(option =>
              (<Button
                key={"btn" + option.title}
                style={styles.buttonLayout}
                onPress={() => navigation.navigate(option.destination)}
                title={option.title}
              />))}
          </View>
        </View>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  // options: state.start.options
});

export default connect(mapStateToProps)(Start);
