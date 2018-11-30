import React from "react";
import { connect } from "react-redux";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Alert,
  Picker
} from "react-native";
import Modal_2 from "react-native-modal";
import {
  TabBarNavigation,
  IgorBackground,
  Fab,
  Input,
  MainMenuButton
} from "../../../components/Igor";
import { setEdit } from "../../../reducers/adv/index";
import styles from "./styles";
import Colors from "../../../styles/colors";
import { Avatar, FormLabel, Button, Slider, List, ListItem } from "react-native-elements";
import { addPlayer, getPlayers, setNextSession } from "../../../actions/adventure";
import { heroes, avatars } from "../../../images";


const newsessionimage = require("../../../images/buttons/add-session.png");
const newplayerimage = require("../../../images/buttons/add-player.png");
class AdventureScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      andamento: true,
      createSession: false,
      dia: "00",
      mes: "00",
      modalVisible: false,
      name: "",
      avatar: "crono",
      class: "",
      maxhp: 200
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
    this.setState({ createSession: false });
    await this.props.setNextSession( this.props.chosen.id, `${this.state.dia}/${this.state.mes}`);
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  async componentDidMount() {
    await this.props.getPlayers(this.props.chosen.id);
  }

  async newPlayer() {
    const heroe = {
      name: this.state.name,
      avatar: this.state.avatar,
      class: this.state.class,
      maxhp: this.state.maxhp
    };
    await this.props.addPlayer(this.props.chosen.id, heroe);
  }
  render(){
    const { chosen } = this.props;
    if(this.state.andamento){
      return(
        IgorBackground(
          <SafeAreaView style = {{ flex: 1 }}>
            <Modal_2
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
            </Modal_2>
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
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                }}>
                <View style={{ marginTop: 22 }}>
                  <View style={{ padding: 40 }}>
                    <Text style={styles.title}>Cadastrar Novo Personagem</Text>
                    <Input
                      title="Nome do Personagem"
                      value={this.state.name}
                      onChange={(text) => this.handleFormChange(text, "name")}/>
                    <FormLabel>Avatar</FormLabel>
                    <View style={{ margin: 20, padding: 20, flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                      <Avatar
                        medium
                        rounded
                        source={heroes.crono}
                        onPress={() => this.handleFormChange("crono", "avatar")}
                        activeOpacity={0.7}
                      />
                      <Avatar
                        medium
                        rounded
                        source={heroes.ayla}
                        onPress={() => this.handleFormChange("ayla", "avatar")}
                        activeOpacity={0.7}
                      />
                      <Avatar
                        rounded
                        medium
                        source={heroes.lucca}
                        onPress={() => this.handleFormChange("lucca", "avatar")}
                        activeOpacity={0.7}
                      />
                      <Avatar
                        rounded
                        medium
                        source={heroes.marle}
                        onPress={() => this.handleFormChange("marle", "avatar")}
                        activeOpacity={0.7}
                      />
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Avatar
                        large
                        rounded
                        source={heroes[this.state.avatar]}
                      />
                    </View>
                    <View>
                      <FormLabel>Vida Inicial: {this.state.maxhp}</FormLabel>
                      <Slider
                        value={this.state.maxhp}
                        maximumValue={500}
                        step={10}
                        minimumValue={100}
                        onValueChange={(itemValue) => this.handleFormChange(itemValue, "maxhp")} />
                    </View>
                    <View>
                      <FormLabel>Classe: {this.state.class}</FormLabel>
                      <Picker
                        selectedValue={this.state.class}
                        onValueChange={(itemValue) => this.handleFormChange(itemValue, "class")}>
                        <Picker.Item label="Mago" value="Mago"/>
                        <Picker.Item label="Arqueiro" value="Arqueiro"/>
                        <Picker.Item label="Clérigo" value="Clérigo"/>
                        <Picker.Item label="Guerreiro" value="Guerreiro"/>
                      </Picker>
                    </View>
                    <Button
                      style={{ marginTop: 30 }}
                      title="Cadastrar"
                      backgroundColor={Colors.greenButton}
                      onPress={() => {
                        this.newPlayer();
                        this.setModalVisible(false);
                      }}>
                    </Button>
                    <Button
                      title="Fechar"
                      onPress={() => {
                        this.setModalVisible(false);
                      }}>
                    </Button>
                  </View>
                </View>
              </Modal>
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
                <List containerStyle={{ marginBottom: 20 }}>
                  { Object.entries(this.props.heroes || {}).map(([ name, hero ]) => (
                    <ListItem
                      roundAvatar
                      avatar={avatars.heroes[hero.avatar]}
                      hideChevron
                      title={name}
                      subtitle={hero.class}
                    />
                  ))}
                </List>
              </View>
            </View>
            <Fab
              source={newplayerimage}
              onPress={() => { this.setModalVisible(); }}
            />
          </SafeAreaView>
        )
      );
    }
  }
}




const mapStateToProps = (state) => ({
  adventures: state.adventures.list,
  chosen: state.adventures.chosen,
  heroes: state.adventures.heroes
});

const mapActionsToProps = {
  setEdit: setEdit,
  addPlayer: addPlayer,
  getPlayers: getPlayers,
  setNextSession: setNextSession
};
export default connect(mapStateToProps, mapActionsToProps)(AdventureScreen);

