import React from "react";
import { connect } from "react-redux";
import {
  Text,
  ImageBackground,
  SafeAreaView,
} from "react-native"

import { Fab } from "../../../components/Igor"

const boxWithTabs = require('../../../images/adventure/content-box.png')
const andamento = 'andamento'
const jogadores = 'jogadores'

style = {
  title: {

  },

  tab: {

  },

  tabContainer: {

  },

  boxContent: {

  },
}

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

  switch = () => this.setState({
    ...this.getState(),
    tab: (this.getState.tab === andamento ? jogadores : andamento)
  })

  render = () => (
    <SafeAreaView>
      <TabBarNavigation navigate = {() => { this.props.navigation.openDrawer() ; }}/>

      <Text style={style.title}>
        {this.props.adventure.name}
      </Text>

      <ImageBackground
        source={boxWithTabs}
        flipped={this.state.tab === jogadores}>

        <View style={style.tabContainer}>
          <TouchableOpacity>
            <Text style={style.tab}>ANDAMENTO</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={style.tab}>ANDAMENTO</Text>
          </TouchableOpacity>
        </View>

        <View style={style.boxContent}>
          <Text>{this.props.adventure}</Text>

          {this.props.adventure.sessions.map(
            ({title, date}) =>
              <View style={style.session}>
                <Text>{date}</Text>
                <Text>{title ? title : "Sessão sem título"}</Text>
              </View>
          )}
        </View>
      </ImageBackground>

      <Fab 
        source={newAdventureImage}
        onPress={() => this.onNewAdventure()}/>
    </SafeAreaView>
  )
}




const mapStateToProps = (state) => ({
  adventures: state.adventures.adventures,
  chosen: state.adventures.chosen
});

export default connect(mapStateToProps)(Adventure);