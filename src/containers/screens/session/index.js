import React from "react";
import { connect } from "react-redux";

import {
  configureCombat,
  beginCombat,

  addEnemy,
  pickEnemy,
  removeEnemy,
  toggleHero
} from "../../../actions/session";

import SessionScreen from "../../../components/session";

class Session extends React.Component {
  startCombat = () => {
    this.props.beginCombat(this.props.event);
    this.props.navigation.navigate("Combat");
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
  toggleHero: i => dispatch(toggleHero(i)),
  addEnemy: () => dispatch(addEnemy()),
  pickEnemy: i => dispatch(pickEnemy(i)),
  removeEnemy: i => dispatch(removeEnemy(i)),

  configureCombat: heroes => dispatch(configureCombat(heroes)),
  beginCombat: combat => dispatch(beginCombat(combat))
});


export default connect(mapStateToProps, mapDispatchToProps)(Session);
