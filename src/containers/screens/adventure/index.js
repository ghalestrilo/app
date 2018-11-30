import React from "react";
import { connect } from "react-redux";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
import Modal from "react-native-modal";
import {
  TabBarNavigation,
  IgorBackground,
  Fab
} from "../../../components/Igor";
import { setEdit } from "../../../reducers/adv/index";
import styles from "./styles";

const newsessionimage = require("../../../images/buttons/add-session.png");
const newplayerimage = require("../../../images/buttons/add-player.png");
class AdventureScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      andamento: true,
      createSession: false,
      text: ""
    };
  }
  handleFormChange(value, key) {
    this.setState({
      [key]: value
    });
  }
  edit(){
    this.props.navigation.navigate("EditAdv");
  }
  render(){
    const { chosen } = this.props;
    if(this.state.andamento){
      return(
        IgorBackground(
          <SafeAreaView style = {{ flex: 1 }}>
            <Modal
              visible={this.state.createSession}
              style = {styles.sessionCreate}>
              <View style={{ margin: "5%" }}>
                <Text style = {styles.textsession}>
                  Insira a data da Proxima Sessao:
                </Text>
                <TextInput
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                  maxLength = {5}
                  keyboardType = {"numeric"}
                />
              </View>
            </Modal>
            <View style = {{ flex: 1 }}>
              <TabBarNavigation
                navigate = {() => { this.props.navigation.openDrawer() ; }}
                edit = {() => { this.edit() ; }}/>
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
                  <View style={{ flex: 1 }}>
                    <View style = {{ flex: 3 }}>
                      <ScrollView style= {{ marginTop: "5%", marginLeft: "5%" }}>
                        <Text>{chosen.brief}</Text>
                      </ScrollView>
                    </View>
                    <View style = {{ width: "100%", height: 2, backgroundColor: "rgb(200,200,200)" }}/>
                    <View style = {{ flex: 1 }}>
                      <ScrollView style= {{ flex: 1, marginTop: "5%", marginLeft: "5%" }}>
                        {chosen.nextSession.map((session, i) =>
                          <Text key = {i}>{session}</Text>)
                        }
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </View>
              <Fab
                source={newsessionimage}
                onPress={() => (this.setState({ createSession: true }))}
              />
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
            <Fab
              source={newplayerimage}
              onPress={() => {}}
            />
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

export default connect(mapStateToProps, { setEdit: setEdit })(AdventureScreen);
