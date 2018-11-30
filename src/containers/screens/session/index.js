import React from "react";
import { connect } from "react-redux";

import {
  clearNews,

  configureCombat,
  beginCombat,

  addEnemy,
  pickEnemy,
  removeEnemy,
  toggleHero
} from "../../../actions/session";

import { Alert } from "react-native";
import SessionScreen from "../../../components/session";

const endgameMessages = {
  flee: "Todos fugiram! Covardes!!",
  defeat: "Os heróis morreram. Tentem novamente!",
  victory: "Os heróis venceram!!"
};

class Session extends React.Component {
  startCombat = () => {
    this.props.beginCombat(this.props.event);
    this.props.navigation.navigate("Combat");
  }

  componentWillMount = () =>
    (this.props.newevent
      ? this.notifyEvent(this.props.history.reverse()[0])
      : null);

  notifyEvent = event => {
    console.log(event);
    switch(event.type){
    case "combat":
      Alert.alert(endgameMessages[event.result]);
      break;
    default:
    }

    this.clearNews();
  }

  render = () => {
    return <SessionScreen
      history={this.props.history}
      event={this.props.event || {}}
      availableEnemies={this.props.availableEnemies}

      configuringCombat={this.props.configuringCombat}
      pickingEnemy={this.props.pickingEnemy}

      toggleHero={this.props.toggleHero}
      addEnemy={this.props.addEnemy}
      pickEnemy={this.props.pickEnemy}
      removeEnemy={this.props.removeEnemy}

      configureCombat={() => this.props.configureCombat(this.props.heroes)}
      beginCombat={() => this.startCombat()}
    />;
  }
}

const mapStateToProps = ({ session, adventure }) => ({
  configuringCombat: session.configuringCombat,
  pickingEnemy: session.pickingEnemy,

  history: session.history,
  event: session.event,

  // These belong to the adventure reducer. Please remove once properly integrated
  heroes: session.heroes,
  availableEnemies: session.availableEnemies
});

const mapDispatchToProps = dispatch => ({
  clearNews: () => dispatch(clearNews()),

  toggleHero: i => dispatch(toggleHero(i)),
  addEnemy: () => dispatch(addEnemy()),
  pickEnemy: i => dispatch(pickEnemy(i)),
  removeEnemy: i => dispatch(removeEnemy(i)),

  configureCombat: heroes => dispatch(configureCombat(heroes)),
  beginCombat: combat => dispatch(beginCombat(combat))
});


export default connect(mapStateToProps, mapDispatchToProps)(Session);
