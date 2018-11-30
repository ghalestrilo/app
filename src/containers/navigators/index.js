import {
  SignUpScreen, LoginScreen, StartScreen,
  AccountScreen, AdventuresScreen, BooksScreen, ConfigurationsScreen,
  NotificationsScreen, NewAdventureScreen, AdventureScreen,
  CombatScreen, SessionScreen, EditAdventureScreen
} from "../screens";
// import Background from "../../images/background/background.png";
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
    Login: LoginScreen,
    Combat: CombatScreen // @TEST
  },
  {
    initialRouteName: "Start",
    navigationOptions: {
      header: null
    }
  }
);

const AdventureStack = createStackNavigator(
  {
    Adventures: AdventuresScreen,
    NewAdventure: NewAdventureScreen,
    Adventure: AdventureScreen,
    EditAdv: EditAdventureScreen,
    Session: SessionScreen,
    Combat: CombatScreen
  },
  {
    initialRouteName: "Adventures",
    navigationOptions: {
      header: null
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Adventures: AdventureStack,
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
