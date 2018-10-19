import {
  SignUpScreen, LoginScreen, StartScreen, HomeScreen,
  AccountScreen, AdventuresScreen, BooksScreen, ConfigurationsScreen,
  NotificationsScreen
} from "../screens";

import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
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


const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Adventure: AdventuresScreen,
    Books: BooksScreen,
    Account: AccountScreen,
    Notifications: NotificationsScreen,
    Configurations: ConfigurationsScreen,
    Logout: StartScreen
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    LoginStack: LoginStack,
    Drawer: DrawerNavigator
  },
  {
    initialRouteName: "LoginStack"
  },
);
export { AppNavigator, LoginStack, DrawerNavigator };
