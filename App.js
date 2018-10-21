import React from "react";
// import { ImageBackground } from "./containers/navigators";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";

import { AppNavigator } from "./containers/navigators";
import reducer from "./reducers/index";

const store = createStore(reducer, {}, applyMiddleware(Logger));

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }

  // render(){
  //   return (
  //     <Provider store={store}>
  //       <ImageBackground
  //         source={background}
  //         style={{width: "100%", height: "100%"}}
  //         resizeMethod="resize">
  //         <AppNavigator />
  //       </ImageBackground>
  //     </Provider>
  //   );
}
