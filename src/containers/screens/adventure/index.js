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
  Fab,
  MainMenuButton
} from "../../../components/Igor";
import { setEdit } from "../../../reducers/adv/index";
import styles from "./styles";
import { setNextSession } from "../../../actions/adventure";

const newsessionimage = require("../../../images/buttons/add-session.png");
const newplayerimage = require("../../../images/buttons/add-player.png");
class AdventureScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      andamento: true,
      createSession: false,
      dia: "00",
      mes: "00"
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
  dia(dia){
    this.setState({ dia });
  }
  mes(mes){
    this.setState({ mes });
  }
  async createsession(){
    console.log(`${this.state.dia}/${this.state.mes}`);
    this.setState({ createSession: false });
    await this.props.setNextSession( this.props.chosen.id, `${this.state.dia}/${this.state.mes}`);
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
                <View style = {{ flexDirection: "row", justifyContent: "center" }}>
                  <TextInput
                    style = {styles.textinput}
                    onChangeText={(dia) => { this.dia(dia) ; }}
                    value={this.state.dia}
                    maxLength = {2}
                    keyboardType = {"numeric"}
                  />
                  <Text>/</Text>
                  <TextInput
                    style = {styles.textinput}
                    onChangeText={(mes) => { this.mes(mes) ; }}
                    value={this.state.mes}
                    maxLength = {2}
                    keyboardType = {"numeric"}
                  />
                </View>
                <MainMenuButton
                  onPress={() => { this.createsession(); }}
                  title = "CRIAR"
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
                      <View style= {{ flex: 1, marginTop: "5%", marginLeft: "5%" }}>
                        <Text>{chosen.nextSession}</Text>
                      </View>
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

export default connect(mapStateToProps, {
  setEdit: setEdit,
  setNextSession: setNextSession
})(AdventureScreen);
