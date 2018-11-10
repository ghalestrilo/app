import React from "react";
import {
  Text,
  SafeAreaView
} from "react-native";
import {
  TabBarNavigation,
  IgorBackground
} from "../../../components/Igor";


class Books extends React.Component {
  render(){
    return(
      IgorBackground(
        <SafeAreaView>
          <TabBarNavigation
            navigate = {() => { this.props.navigation.openDrawer() ; }}/>
          <Text>This is BooksScreen</Text>
        </SafeAreaView>
      )
    );
  }
}

export default Books;
