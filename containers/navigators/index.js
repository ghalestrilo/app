import {
  SignUpScreen,
  LoginScreen,
  StartScreen,
  HomeScreen,
} from '../screens'

import { 
  createStackNavigator, 
  createSwitchNavigator,
} from 'react-navigation'

const LoginStack = createStackNavigator(
  {
    Start: StartScreen,
    Signup: SignUpScreen,
    Login: LoginScreen,
  },
);

const HomeStack = createStackNavigator (
  {
  Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createSwitchNavigator(
  {
    loginstack: LoginStack ,
    Home: HomeStack,
  },
  {
    initialRouteName: 'loginstack',
  },
);
export {AppNavigator,HomeStack,LoginStack};
