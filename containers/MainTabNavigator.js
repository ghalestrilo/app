import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home'
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

export default createMaterialTopTabNavigator({
  HomeStack,
  // LinksStack,
  // SettingsStack,
},
{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
    },
    tabStyle: {
      width: 100,
    },
    style: {
      paddingTop: 24,
      backgroundColor: 'rgb(39,9,51)',
    },
  }
});
