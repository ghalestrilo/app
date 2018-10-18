import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger'
import { createStackNavigator } from 'react-navigation'

import screens from './containers/screens';
import reducer from './reducers/index';

const store = createStore(reducer, {}, applyMiddleware(Logger));
const Navigator = createStackNavigator(screens);
// const AppNavigator = () => (<Navigator/>)

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    // store: store
  };

  // Talvez colocar o background aqui, ja que vai aparecer em todas as telas
  render(){
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}

