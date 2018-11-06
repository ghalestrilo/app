import React from "react";
import { connect } from "react-redux";

import {
  SafeAreaView,
  ScrollView,
  View
} from "react-native";

import {
  IgorBackground,
  Adventure,
  Fab,
  TabBarNavigation
} from "../../../components/Igor";

const newAdventureImage = require("../../../images/buttons/nova-aventura.png");

class Adventures extends React.Component {
  state = {
    edit: false
  }

  onClickAdventure(adv, i){
    // this.props.dispatch(viewAdventure(i))
    this.props.navigation.navigate("Adventure", { title: adv.title });
  }

  onNewAdventure(){
    this.props.navigation.navigate("NewAdventure");
  }
  render() {
    const { adventures } = this.props;
    // const { forms } = this.state;
    if(adventures.length === 0){
      return(
        IgorBackground(
          <SafeAreaView>
            <SafeAreaView>
              <TabBarNavigation
                navigate = {() => { this.props.navigation.openDrawer() ; }}/>
              <ScrollView>
                <View style={{ width: "100%", height: 120 }}></View>
              </ScrollView>
            </SafeAreaView>
            <Fab
              source={newAdventureImage}
              onPress={() => this.onNewAdventure()}
            />
          </SafeAreaView>
        )
      );
    }else{
      return (
        IgorBackground(
          <SafeAreaView>
            <SafeAreaView>
              <TabBarNavigation
                navigate = {() => { this.props.navigation.openDrawer() ; }}/>
              <ScrollView>
                {adventures.map((adv, i) =>
                  <Adventure
                    key={i}
                    props={{
                      ...adv,
                      onPress: () => this.onClickAdventure(adv, i)
                    }}/>)
                }
              </ScrollView>
            </SafeAreaView>
            <Fab
              source={newAdventureImage}
              onPress={() => this.onNewAdventure()}
            />
          </SafeAreaView>
        )
      );
    }
  }
}

const mapStateToProps = (state) => ({
  adventures: state.adventures
});

export default connect(mapStateToProps)(Adventures);
