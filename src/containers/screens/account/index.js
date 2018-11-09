import React from "react";
import {
  Text,
  View
} from "react-native";
import {
  TabBarNavigation
} from "../../../components/Igor";

class Account extends React.Component {
  render(){
    return(
      <View>
        <TabBarNavigation
          navigate = {() => { this.props.navigation.openDrawer() ; }}/>
        <Text>This is accountscreen</Text>
      </View>
    );
  }
}

export default Account;
