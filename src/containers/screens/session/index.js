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
  render = () =>
    <SessionScreen
      history={this.props.history}
      event={this.props.event || {}}

      configuringCombat={this.props.configuringCombat}
      pickingEnemy={this.props.pickingEnemy}

      configureCombat={() => this.props.configureCombat(this.props.heroes)}
      toggleHero={this.props.toggleHero}
      pickEnemy={this.props.pickEnemy}
      beginCombat={this.props.beginCombat}
    />
}

const mapStateToProps = ({ session, adventure }) => ({
  configuringCombat: session.configuringCombat,
  pickingEnemy: session.pickingEnemy,

  history: session.history,
  event: session.event,

  heroes: session.heroes // remove
  // heroes: adventure.heroes
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
