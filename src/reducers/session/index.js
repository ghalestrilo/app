import state from "./state"; // remove

const initialState = {
  configuringCombat: false,
  pickingEnemy: false,

  event: null,

  enemies: [],
  history: [],

  // These belong to the adventure reducer. Please remove once properly integrated
  heroes: state.heroes,
  availableEnemies: state.availableEnemies
};

import {
  FINISH_COMBAT,
  CONFIGURE_COMBAT,
  TOGGLE_HERO,
  ADD_ENEMY,
  PICK_ENEMY,
  REMOVE_ENEMY,
  BEGIN_COMBAT
} from "../../actions/types";

const session = (state = initialState, action) => {
  switch(action.type){
  case CONFIGURE_COMBAT:
    return {
      ...state,
      configuringCombat: true,
      event: {
        type: "combat",
        heroes: action.payload.heroes.map(hero => ({ ...hero, picked: true })),
        enemies: []
      }
    };

  case ADD_ENEMY:
    return {
      ...state,
      pickingEnemy: true
    };

  case PICK_ENEMY:
    return {
      ...state,
      pickingEnemy: false,
      event: {
        ...state.event,
        enemies: [
          state.availableEnemies[action.payload],
          ...(state.event.enemies || [])
        ]
      }
    };

  case REMOVE_ENEMY:
    return {
      ...state,
      event: {
        ...state.event,
        enemies: state.event.enemies.filter(
          (e, i) => i !== action.payload)
      }
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

  case BEGIN_COMBAT:
    return {
      ...state,
      configuringCombat: false,
      pickingEnemy: false
    };

  case FINISH_COMBAT:
    return {
      ...state,
      history: [ ...state.history, action.payload ]
    };

  default: return state;
  }
};

export default session;
