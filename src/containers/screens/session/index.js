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

  render = () => {
    // console.log("event: ", this.props.event);
    console.log("pickingEnemy: ", this.props.pickingEnemy);
    console.log("configuringCombat: ", this.props.configuringCombat);
    return <SessionScreen
      history={this.props.history}
      event={this.props.event || {}}
      availableEnemies={this.props.availableEnemies}

      configuringCombat={this.props.configuringCombat}
      pickingEnemy={this.props.pickingEnemy}

      configureCombat={() => this.props.configureCombat(this.props.heroes)}
      toggleHero={this.props.toggleHero}
      addEnemy={this.props.addEnemy}
      pickEnemy={this.props.pickEnemy}
      removeEnemy={this.props.removeEnemy}
      beginCombat={this.props.beginCombat}
    />
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
  configureCombat: heroes => dispatch(configureCombat(heroes)),
  toggleHero: i => dispatch(toggleHero(i)),
  addEnemy: () => dispatch(addEnemy()),
  pickEnemy: i => dispatch(pickEnemy(i)),
  removeEnemy: i => dispatch(removeEnemy(i)),
  beginCombat: () => dispatch(beginCombat())
});


export default connect(mapStateToProps, mapDispatchToProps)(Session);
