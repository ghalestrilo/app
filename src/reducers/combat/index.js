import initialState from "./state.js";
import {
  NEW_EVENT,
  FINISH_COMBAT,
  BEGIN_COMBAT

} from "../../actions/types";

import {
  applyAction,
  nextplayer,
  shuffle,
  modifyAt
} from "../../util/rules";

const combat = (state = initialState, action) => {
  switch(action.type){

  case BEGIN_COMBAT:
    return buildCombatFromEvent(action.payload);

  case NEW_EVENT:
    return {
      ...state,
      events: [ action.payload, ...state.events ],
      actors: modifyAt(action.payload.target, state.actors)(applyAction(action.payload.action)),
      player: nextplayer(state.player, state.actors)
    };

  case FINISH_COMBAT:
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



const buildCombatFromEvent = event => ({
  actors: shuffle([
    ...event.enemies.map(enemy => ({ ...enemy, hero: false })),
    ...event.heroes
      .map(hero => ({ ...hero, hero: true }))
      .filter(hero => hero.picked)
  ]).map(actor => ({
    ...actor,
    status: {
      hp: actor.maxhp,
      fled: false,
      dead: false,
      effects: []
    }
  })),
  events: [],
  ongoing: true,
  player: 0,
  result: null
});
