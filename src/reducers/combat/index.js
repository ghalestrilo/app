const ability = "ability";
const spell = "spell";
const attack = "attack";
const flee = "flee";
const item = "item";


const initialState = {
  ongoing: true,
  player: 0,
  actors: [
    {
      type: "hero",
      hp: 10,
      actions: [
        {
          type: flee,
          mod: 0
        },
        {
          type: attack,
          mod: 3,
          damage: 15
        },
        {
          type: spell,
          name: "cold blast",
          damage: 10,
          effects: {
            freeze: {
              chance: 0.5,
              duration: 2
            }
          }
        }
      ]
    }
  ],

  events: [
    {
      author: 0,
      target: 0,
      action: {
        type: attack,
        mod: 3,
        damage: 15
      }
    }
  ]
};

import {
  NEW_EVENT,
  KILL_ACTOR,
  UNKILL_ACTOR,

  VICTORY,
  DEFEAT
} from "../../actions/types";

const combat = (state = initialState, action) => {
  switch(action.type){

  case NEW_EVENT:
    return {
      ...state,
      events: [ action.payload, ...state.events ],
      player: (state.player + 1 > state.actors.length)
        ? 0
        : (state.player + 1)
    };

  case KILL_ACTOR:
    return {
      ...state,
      actors: state.actors.map(
        (actor, i) => ((i === action.payload)
          ? { ...actor, dead: true }
          : actor))
    };

  case UNKILL_ACTOR:
    return {
      ...state,
      actors: state.actors.map(
        (actor, i) => ((i === action.payload)
          ? { ...actor, dead: true }
          : actor))
    };

  case DEFEAT:
  case VICTORY:
    return {
      ...state,
      ongoing: false
    };

  default:
    return state;
  }
};

export default combat;
