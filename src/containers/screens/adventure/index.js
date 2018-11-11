import React from "react";
import { connect } from "react-redux";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import {
  TabBarNavigation,
  IgorBackground
} from "../../../components/Igor";
import styles from "./styles";

class AdventureScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      andamento: true
    };
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
  }
  render(){
    const { chosen } = this.props;
    if(this.state.andamento){
      return(
        IgorBackground(
          <SafeAreaView style = {{ flex: 1 }}>
            <TabBarNavigation
              navigate = {() => { this.props.navigation.openDrawer() ; }}/>
            <View style = {{ flex: 1, marginLeft: "10%", marginRight: "10%" }}>
              <Text style = {styles.title}>{chosen.title}</Text>
              <View style = {styles.container}>
                <TouchableOpacity
                  style = {styles.selected}
                  onPress = {() => {}}>
                  <Text style = {{ fontWeight: "bold" }}>ANDAMENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style = {styles.unselected}
                  onPress = {() => this.setState({ andamento: !this.state.andamento })}
                >
                  <Text style = {{ fontWeight: "bold" }}>JOGADORES</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.inputbackground}>
              </View>
            </View>
          </SafeAreaView>
        )
      );
    }else{
      return(
        IgorBackground(
          <SafeAreaView style = {{ flex: 1 }}>
            <TabBarNavigation
              navigate = {() => { this.props.navigation.openDrawer() ; }}/>
            <View style = {{ flex: 1, marginLeft: "10%", marginRight: "10%" }}>
              <Text style = {styles.title}>{chosen.title}</Text>
              <View style = {styles.container}>
                <TouchableOpacity
                  style = {styles.unselected}
                  onPress = {() => this.setState({ andamento: !this.state.andamento })}>
                  <Text style = {{ fontWeight: "bold" }}>ANDAMENTO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style = {styles.selected}
                  onPress = {() => {}}>
                  <Text style = {{ fontWeight: "bold" }}>JOGADORES</Text>
                </TouchableOpacity>
              </View>
              <View style = {styles.inputbackground}>
              </View>
            </View>
          </SafeAreaView>
        )
      );
    }
  }
}




const mapStateToProps = (state) => ({
  adventures: state.adventures.list,
  chosen: state.adventures.chosen
});

export default connect(mapStateToProps)(AdventureScreen);
