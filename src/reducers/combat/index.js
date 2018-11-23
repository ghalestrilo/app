import initialState from "./state.js";
import {
  NEW_EVENT,
  FINISH_COMBAT

} from "../../actions/types";

const cannotPlay = actor =>
  (actor.status.dead === true) ||
  (actor.status.fled === true);

// const success = chance =>

const capMax = max => value => (value > max ? max : value);
const capMin = min => value => (value < min ? min : value);

const modifyAt = (index, arr) =>
  callback => arr.map(
    (element, i) => ((i === index)
      ? callback(element)
      : element));

const applyAction = action =>
  actor => ({
    ...actor,
    status: {
      ...actor.status,
      hp: actor.status.hp
        - (action.damage || 0)
        + (action.healing || 0),
      effects: (actor.effects || [])
        .map(eff => ({ ...eff, duration: eff.duration - 1 }))
        .filter(eff => eff.duration > 0)
        + (action.effects || [])
    }
  });

const nextplayer = (player, actors) =>
  ((player + 1 < actors.length)
    ? (cannotPlay(actors[player + 1])
      ? nextplayer(player + 1, actors)
      : player + 1)
    : (cannotPlay(actors[0])
      ? nextplayer(0, actors)
      : 0));

const combat = (state = initialState, action) => {
  switch(action.type){

  case NEW_EVENT:
    return {
      ...state,
      events: [ action.payload, ...state.events ],
      actors: modifyAt(action.payload.target, state.actors)(applyAction(action.payload.action)),
      player: nextplayer(state.player, state.actors)
    };

    // case KILL_ACTOR:
    //   return {
    //     ...state,
    //     actors: state.actors.map(
    //       (actor, i) => ((i === action.payload)
    //         ? { ...actor, dead: true }
    //         : actor))
    //   };

    // case UNKILL_ACTOR:
    //   return {
    //     ...state,
    //     actors: state.actors.map(
    //       (actor, i) => ((i === action.payload)
    //         ? { ...actor, dead: false }
    //         : actor))
    //   };

  case FINISH_COMBAT:
    console.log("combat ended! result: ", action.payload);
    return {
      ...state,
      ongoing: false,
      result: action.payload
    };

  default:
    return state;
  }
};

export default combat;
