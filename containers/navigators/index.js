import {
  SignUpScreen, LoginScreen, StartScreen, HomeScreen,
  AccountScreen,AdventuresScreen,BooksScreen,ConfigurationsScreen,
  NotificationsScreen,
} from '../screens'

import { 
  createStackNavigator, 
  createSwitchNavigator,
  createDrawerNavigator,
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
    LoginStack: LoginStack ,
    Home: HomeStack,
  },
  {
    initialRouteName: 'LoginStack',
  },
);
export {AppNavigator,HomeStack,LoginStack};
