import {
  SignUpScreen, LoginScreen, StartScreen,
  AccountScreen, AdventuresScreen, BooksScreen, ConfigurationsScreen,
  NotificationsScreen
} from "../screens";
import { colors } from "../../styles";

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
    initialRouteName: "Start",
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent"
    },
    navigationOptions: {
      header: null
    }
  }
);


const DrawerNavigator = createDrawerNavigator(
  {
    Adventures: AdventuresScreen,
    Books: BooksScreen,
    Account: AccountScreen,
    Notifications: NotificationsScreen,
    Configurations: ConfigurationsScreen,
    Logout: StartScreen
  },
  {
    initialRouteName: "Adventures",
    drawerLockMode: "locked-closed",
    drawerBackgroundColor: colors.drawerbackground,
    contentOptions: {
      activeTintColor: colors.drawernavactive,
      inactiveTintColor: colors.drawernavinactive
    }
  },
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