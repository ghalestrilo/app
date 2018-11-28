import state from "./state"; // remove

const initialState = {
  configuringCombat: false,
  pickingEnemy: false,

  event: null,

  enemies: [],
  history: [],

  heroes: state.heroes // remove, this should be in adventures
};

import {
  FINISH_COMBAT,
  CONFIGURE_COMBAT,
  TOGGLE_HERO,
  ADD_ENEMY,
  PICK_ENEMY
} from "../../actions/types";

const session = (state = initialState, action) => {
  switch(action.type){

  case PICK_ENEMY: return state;

  case CONFIGURE_COMBAT:
    return {
      ...state,
      configuringCombat: true,
      event: {
        heroes: action.payload.heroes.map(hero => ({ ...hero, picked: true })),
        enemies: []
      }
    };


  case ADD_ENEMY:
    return {
      ...state,
      pickingEnemy: true
    };

  case TOGGLE_HERO:
    return {
      ...state,
      event: {
        ...state.event,
        heroes: state.event.heroes.map((character, i) =>
          (i === action.payload)
            ? { ...character, picked: !character.picked }
            : character)
      }
    };

  case FINISH_COMBAT:
    return {
      ...state,
      combats: [ ...state.combats, action.payload ]
    };

  default: return state;
  }
};

export default session;
