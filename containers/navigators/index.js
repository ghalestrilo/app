import {
  SignUpScreen,
  LoginScreen,
  StartScreen,
  HomeScreen
} from "../screens";

import {
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";

const LoginStack = createStackNavigator(
  {
    Start: StartScreen,
    Signup: SignUpScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Start"
  }
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    loginStack: LoginStack,
    Home: HomeStack
  },
  {
    initialRouteName: "loginStack"
  },
);
export { AppNavigator, HomeStack, LoginStack };
