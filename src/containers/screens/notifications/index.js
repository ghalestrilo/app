import React from "react";
import {
  Text,
  SafeAreaView
} from "react-native";
import {
  TabBarNavigation
} from "../../../components/Igor";

class Notifications extends React.Component {
  render(){
    return(
      <SafeAreaView>
        <TabBarNavigation
          navigate = {() => { this.props.navigation.openDrawer() ; }}/>
        <Text>This is NotificationsScreen</Text>
      </SafeAreaView>
    );
  }
}

export default Notifications;
