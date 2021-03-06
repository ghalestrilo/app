const initialState = {
  configuringCombat: false,
  pickingEnemy: false,

  event: null,
  newevent: false,

  enemies: [],
  history: []
};

import {
  FINISH_COMBAT,
  CONFIGURE_COMBAT,
  TOGGLE_HERO,
  ADD_ENEMY,
  PICK_ENEMY,
  REMOVE_ENEMY,
  BEGIN_COMBAT,
  CLEAR_NEWS,
  BEGIN_SESSION
} from "../../actions/types";
import { avatars } from "../../images";
import { actionTypes } from "../../util/rules";

const prepActor = actor => ({
  ...actor,
  actions: Object.entries(actor.actions)
    .map(([ name, action ]) => ({
      ...action,
      avatar: avatars.actions[action.avatar],
      name: name,
      type: actionTypes[action.type] || action.type,
      target: (action.type === actionTypes.flee ? "self" : "pick")
    }))
});

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

  case BEGIN_SESSION:
    return {
      ...state,
      availableEnemies: Object.values(action.payload.availableEnemies || {}).map(x => prepActor(x)),
      enemies: Object.values(action.payload.enemies || {})
        .map(x => prepActor(x))
        .map(enemy => ({
          ...enemy,
          avatar: avatars.enemies[enemy.avatar],
          picked: true
        })),
      heroes: Object.values(action.payload.heroes || {})
        .map(x => prepActor(x))
        .map(hero => ({
          ...hero,
          avatar: avatars.heroes[hero.avatar]
        }))
    };

  case FINISH_COMBAT:
    return {
      ...state,
      newevent: true,
      history: [
        ...state.history,
        {
          ...state.event,
          result: action.payload
        }
      ]
    };

  case CLEAR_NEWS:
    return {
      ...state,
      newevent: false
    };

  default: return state;
  }
};

export default session;
