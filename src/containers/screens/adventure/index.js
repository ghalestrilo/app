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
const andamento = 'jogadores'

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

class Adventure extends React.Component {
  state = {
    tab: andamento
  }

  switch()

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
            (session) =>
              <View style={style.session}>
                <Text>{session.date}</Text>
                <Text>{session.title ? session.title : "Sessão sem título"}</Text>
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
  adventure: state.adventures.chosen
});

export default connect(mapStateToProps)(Adventure);