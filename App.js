import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './containers/AppNavigator';

import { Provider } from 'react-redux';
import screens from "./containers/screens";

import { createStore } from "redux";
import reducer from "./reducers/index";

const store = createStore(reducer);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    store: null
  };

  render(){
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
