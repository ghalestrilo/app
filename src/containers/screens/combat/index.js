import React from "react";
import { connect } from "react-redux";

import {
  newEvent,
  finishCombat
} from "../../../actions/combat";


import CombatScreen from "../../../components/combat";
import forAll from "../../../util/forAll";

const initialState = {
  pickingAction: false,
  pickingTarget: false,
  actions: null,
  action: null,
  target: null
};

class Combat extends React.Component {
  state = initialState;

  componentWillUpdate = nextProps => {
    if (!nextProps.ongoing) return;
    const actors = nextProps.actors.map((a, i) => ({ ...a, index: i }));
    const enemies = actors.filter(x => x.hero === false);
    const heroes = actors.filter(x => x.hero === true);

    if (forAll(heroes, x => x.status.fled === true))  this.finishCombat("flee");
    if (forAll(heroes, x => x.status.dead === true))  this.finishCombat("defeat");
    if (forAll(enemies, x => (x.status.dead === true || x.status.flee === true))) this.finishCombat("victory");
  }

  openActionPicker = actions => this.setState({
    ...this.state,
    actions: actions,
    pickingAction: true
  })

  pickAction = action => {
    this.setState({
      ...this.state,
      action: action,
      pickingAction: false,
      pickingTarget: true
    });

    if (action.target === "self")
      this.pickTarget(this.props.playerID);
  }

  pickTarget = target => {
    const event = {
      author: this.props.playerID,
      target: target,
      action: { ...this.state.action }
    };

    this.newEvent(event);

    this.setState(initialState);
  }

  newEvent = event => this.props.dispatch(newEvent({
    ...event,
    author: this.props.playerID
  }))

  finishCombat = result => {
    this.props.dispatch(finishCombat(result));
    this.props.navigation.navigate("Session");
  }

  render = () => {

    const { player, events } = this.props;
    const actions = this.state.actions;

    const actors = this.props.actors.map((a, i) => ({ ...a, index: i }));
    const enemies = actors.filter(x => x.hero === false);
    const heroes = actors.filter(x => x.hero === true);

    return <CombatScreen
      events={events}
      heroes={heroes}
      player={player}
      enemies={enemies}
      actions={actions}

      action={this.state.action}
      showActionPicker={this.state.pickingAction}
      showTargetPicker={this.state.pickingTarget}


      onActionGroup={action => this.openActionPicker(action)}
      onChooseAction={action => this.pickAction(action)}
      onChooseTarget={target => this.pickTarget(target)}
      onFinishAction={event => this.newEvent(event)}
    />;
  }
}

const mapStateToProps = ({ combat }) => ({
  events: (combat.events || [])
    .slice(0, 3)
    .map(
      event => ({
        ...event,
        author: combat.actors[event.author],
        target: combat.actors[event.target]
      })),

  ongoing: combat.ongoing,
  actors: combat.actors.map((a, index) => ({ ...a, index: index })),
  player: combat.actors[combat.player],
  playerID: combat.player
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Combat);
