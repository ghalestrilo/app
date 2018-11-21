import React from "react";
import { connect } from "react-redux";
import { Modal, View } from "react-native";

import {
  newEvent
} from "../../../actions/combat";

import CombatScreen from "../../../components/combat";
import { TargetPicker } from "../../../components/combat";

class Combat extends React.Component {
  state = {
    pickingAction: false,
    pickingTarget: false,
    actions: null,
    action: null,
    target: null
  }

  pickAction = action => this.setState({
    ...this.getState(),
    action: action,
    pickingAction: false,
    pickingTarget: true
  })

  openActionPicker = actions => this.setState({
    ...this.getState(),
    actions: actions,
    pickingAction: true
  })

  pickTarget = target => this.setState({
    ...this.getState(),
    actions: null,
    target: target
  })

  render = () =>
    <View style={{flex: 1}}>
      <CombatScreen
        events={this.props.events}
        heroes={this.props.heroes}
        player={this.props.player}
        enemies={this.props.enemies}
        newEvent={this.props.newEvent}
      />;

      <Modal visible={this.state.pickingTarget}>
        <TargetPicker pickTarget={(target) => this.pickTarget(target)}/>
      </Modal>
    </View>
}

const mapStateToProps = state => ({
  events: state.combat.events
    .slice(0, 4)
    .map(
      event => ({
        ...event,
        author: state.combat.actors[event.author],
        target: state.combat.actors[event.target]
      })),

  player: state.combat.actors[state.combat.player],
  enemies: state.combat.actors.filter(x => x.hero === false),
  heroes: state.combat.actors.filter(x => x.hero === true)
});

const mapDispatchToProps = dispatch => ({
  newEvent: event => dispatch(newEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Combat);
