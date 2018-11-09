import React from "react";
import { connect } from "react-redux";
import {
  SafeAreaView
} from "react-native";

import {
  IgorBackground,
  IgorLogo,
  MainMenuButton
} from "../../../components/Igor";

import {
  logout as LogoutUser
} from "../../../actions/user";

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
  componentWillMount() {
    this.props.LogoutUser();
  }
  render() {
    const { navigation } = this.props;
    return (
      IgorBackground(
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
      )
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { LogoutUser })(Start);
