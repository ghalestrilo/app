import React from "react";
import { connect } from "react-redux";
import {
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  View
} from "react-native";

import {
  Fab,
  TabBarNavigation
} from "../../../components/Igor";

const boxWithTabs = require("../../../images/adventure/content-box.png");
const newSessionImage = require("../../../images/buttons/nova-sessao.png");

const andamento = "andamento";
const jogadores = "jogadores";

const style = {
  screen: {
    flex: 1,
    marginLeft: "10%",
    marginRight: "10%"
  },
  
  title: {

  },

  tab: {

  },

  tabContainer: {
    flex: 1,
    flexDirecion: "row",
    alignItems: "center",
    justityContent: "space-between"
  },

  boxWithTabs: {
    width: "100%",
    height: "100%"
  },

  flipped: {
    transform: [
      { scaleX: -1 }
    ]
  },

  boxContent: {

  }
};

// <SafeAreaView style = {{ flex: 1 }}>
//   <TabBarNavigation
//     navigate = {() => { this.props.navigation.openDrawer() ; }}/>
//   <View style = {{ flex: 1, marginLeft: "10%", marginRight: "10%" }}>
//     <Text style = {styles.title}>{chosen.title}</Text>
//     <View style = {styles.container}>
//       <TouchableOpacity
//         style = {styles.selected}
//         onPress = {() => {}}>
//         <Text style = {{ fontWeight: "bold" }}>ANDAMENTO</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style = {styles.unselected}
//         onPress = {() => this.setState({ andamento: !this.state.andamento })}
//       >
//         <Text style = {{ fontWeight: "bold" }}>JOGADORES</Text>
//       </TouchableOpacity>
//     </View>
//     <View style = {styles.inputbackground}>
//     </View>
//   </View>
// </SafeAreaView>

class Adventure extends React.Component {
  state = {
    tab: andamento
  }

  switch = (tab) => this.setState({
    ...this.getState(),
    tab: tab
  })

  onNewSession = () => {};

  render = () => {
    const { adventure, navigation } = this.props;
    const flipped = (this.state.tab === jogadores);

    return  <SafeAreaView style={ style.screen }>
      <TabBarNavigation navigate = {() => { navigation.openDrawer() ; }}/>

      <Text style={style.title}>
        {adventure.title}
      </Text>

      <ImageBackground
        source={boxWithTabs}
        style={[ style.boxWithTabs, flipped ? style.flipped : undefined ]}>

        <View style={style.tabContainer}>
          {[ andamento, jogadores ].map((tab) =>
            <TouchableOpacity onPress={() => this.switch(tab)}>
              <Text style={style.tab}>{tab}</Text>
            </TouchableOpacity>)
          }


          <TouchableOpacity>
            <Text style={style.tab}>JOGADORES</Text>
          </TouchableOpacity>
        </View>

        <View style={style.boxContent}>
          <Text>{adventure.summary}</Text>
          {adventure.sessions.map(
            ({ title, date }) =>
              <View style={style.session}>
                <Text>{date}</Text>
                <Text>{title ? title : "Sessão sem título"}</Text>
              </View>
          )}
        </View>
      </ImageBackground>

      <Fab
        source={newSessionImage}
        onPress={() => this.onNewSession()}/>
    </SafeAreaView>;
  }
}




const mapStateToProps = (state) => ({
  adventures: state.adventures.adventures,
  adventure: state.adventures.chosen
});

export default connect(mapStateToProps)(Adventure);
