import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Start from './screens/start/start';
import Login from './screens/login/login';
import Signin from './screens/signin/signin';

// const background = './images/background/background.png';
const appStackNavigator = (
  <AppStackNavigator />
);

export default class App extends React.Component {
  render() {
    return (
      appStackNavigator
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Start,
  Login,
  Signin,
});
