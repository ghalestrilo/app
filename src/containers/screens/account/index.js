import React from "react";
import {
  Text,
  View
} from "react-native";
import {
  IgorBackground,
  TabBarNavigation
} from "../../../components/Igor";

class Account extends React.Component {
  render(){
    return(
      IgorBackground(
        <View>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <Text>This is accountscreen</Text>
        </View>
      )
    );
  }
}

export default Account;
