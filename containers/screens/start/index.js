import React from "react";
import { connect } from "react-redux";
import {
  View
} from "react-native";

import {
  IgorBackground,
  IgorLogo,
  MainMenuButton
} from "../../../components/Igor";

import styles from "./styles";

// Constants
const options = [
  {
    title: "LOGIN",
    destination: "Login"
  },
  {
    title: "CADASTRO",
    destination: "Signup"
  }
];

class Start extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigation } = this.props;
    return (
      IgorBackground(
        <View style={styles.container}>
          {IgorLogo(styles)}
          <View style={styles.buttonsContainer}>
            {options.map(option =>
              (<MainMenuButton
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

export default connect()(Start);
