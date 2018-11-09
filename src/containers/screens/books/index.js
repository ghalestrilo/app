import React from "react";
import {
  Text,
  SafeAreaView
} from "react-native";
import {
  TabBarNavigation
} from "../../../components/Igor";


class Books extends React.Component {
  render(){
    return(
      <SafeAreaView>
        <TabBarNavigation
          navigate = {() => { this.props.navigation.openDrawer() ; }}/>
        <Text>This is BooksScreen</Text>
      </SafeAreaView>
    );
  }
}

export default Books;
