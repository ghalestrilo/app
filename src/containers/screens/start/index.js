import React from "react";
import { connect } from "react-redux";
import {
  SafeAreaView
} from "react-native";

import {
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
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <IgorLogo/>
        <SafeAreaView style={styles.buttonsContainer}>
          {options.map(option =>
            (<MainMenuButton
              key={"btn" + option.title}
              onPress={() => navigation.navigate(option.destination)}
              title={option.title}
            />))}
        </SafeAreaView>
      </SafeAreaView>
    );
  }
}

export default connect()(Start);
