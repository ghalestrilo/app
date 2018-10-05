import React from "react";
import { createStackNavigator } from "react-navigation";

import Start from "./screens/start";
import Login from "./screens/login";
import Signin from "./screens/signup";

// const background = "./images/background/background.png';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Start,
  Login,
  Signin
});
