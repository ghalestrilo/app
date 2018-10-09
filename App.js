import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from "redux";

import screens from "./containers/screens";
import reducer from "./reducers/index";

const store = createStore(reducer);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    store: null
  };

  render(){
    return (
      <Provider>
        <AppStackNavigator />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Start: screens.start,
  Login: screens.login,
  Signin: screens.signin
});
