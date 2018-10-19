import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";

import { AppNavigator } from "./src/containers/navigators";
import reducer from "./src/reducers";

const store = createStore(reducer, {}, applyMiddleware(Logger));

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
