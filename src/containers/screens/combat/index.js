import React from "react";
import { connect } from "react-redux";
import { Modal, View } from "react-native";

import {
  newEvent
} from "../../../actions/combat";

import CombatScreen from "../../../components/combat";

class Combat extends React.Component {
  state = {
    pickingAction: false,
    pickingTarget: false,
    actions: null,
    action: null,
    target: null
  }

  openActionPicker = actions => this.setState({
    ...this.state,
    actions: actions,
    pickingAction: true
  })

  pickAction = action => this.setState({
    ...this.state,
    action: action,
    pickingAction: false,
    pickingTarget: true
  })

  pickTarget = target => {
    const event = {
      author: this.props.playerID,
      target: target,
      action: this.state.action
    };

    this.setState({
      ...this.state,
      actions: null,
      pickingTarget: false,
      target: target
    });

    this.newEvent(event);
  }

  newEvent = event => this.props.dispatch(newEvent({
    ...event,
    author: this.props.playerID
  }))

  render = () => {
    const { player, events } = this.props;

    const actors = this.props.actors.map((a, i) => ({ ...a, index: i }));
    const enemies = actors.filter(x => x.hero === false);
    const heroes = actors.filter(x => x.hero === true);

    return <CombatScreen
      events={events}
      heroes={heroes}
      player={player}
      enemies={enemies}

      showActionPicker={this.state.pickingAction}
      showTargetPicker={this.state.pickingTarget}

      onActionGroup={action => this.openActionPicker(action)}
      onChooseAction={action => this.pickAction(action)}
      onChooseTarget={target => this.pickTarget(target)}
      onFinishAction={event => this.newEvent(event)}
    />;
  }
}

const mapStateToProps = state => ({
  events: state.combat.events
    .slice(0, 2)
    .map(
      event => ({
        ...event,
        author: state.combat.actors[event.author],
        target: state.combat.actors[event.target]
      })),

  actors: state.combat.actors.map((a, index) => ({ ...a, index: index })),
  player: state.combat.actors[state.combat.player],
  playerID: state.combat.player
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Combat);
