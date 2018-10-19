import React from "react";
import firebase from "firebase";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";

import { AppNavigator } from "./containers/navigators";
import reducer from "./reducers/index";

const store = createStore(reducer, {}, applyMiddleware(Logger));

export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC5hIUffHTZc7RPXPxhU8MuB85GqWAi3_w",
      authDomain: "igor-dev-apps.firebaseapp.com",
      databaseURL: "https://igor-dev-apps.firebaseio.com",
      projectId: "igor-dev-apps",
      storageBucket: "igor-dev-apps.appspot.com",
      messagingSenderId: "463098371234"
    };
    firebase.initializeApp(config);
  }
  render(){
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
