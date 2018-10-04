import React from 'react';
import { 
  StyleSheet, Text, View,ImageBackground
  } from 'react-native';
import{ createStackNavigator } from 'react-navigation';

import Start from './screens/start/start.js'
import Login from './screens/login/login.js'
import Signin from './screens/signin/signin.js'

let background = './images/background/background.png'

export default class App extends React.Component {
  render(){
    return(
      <AppStackNavigator/>
    );  
  }
}

const AppStackNavigator =createStackNavigator({
  Start:Start,
  Login:Login,
  Signin:Signin,
})

