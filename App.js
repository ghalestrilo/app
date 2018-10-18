import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppNavigator } from './containers/navigators'

import store from './redux/index';

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
