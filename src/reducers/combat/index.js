import {
  NEW_EVENT,
  KILL_ACTOR,
  UNKILL_ACTOR,

  VICTORY,
  DEFEAT
} from "../../actions/types";

const ability = "ability";
const spell = "spell";
const attack = "attack";
const flee = "flee";
const item = "item";

const portraits = {
  crono: require("../../images/temp/portraits/crono.png"),
  ayla: require("../../images/temp/portraits/ayla.png"),
  lucca: require("../../images/temp/portraits/lucca.png"),
  marle: require("../../images/temp/portraits/marle.png"),
  robo: require("../../images/temp/portraits/robo.png")
};


const initialState = {
  ongoing: true,
  player: 0,
  actors: [
    {
      portrait: portraits.crono,
      type: "hero",
      maxhp: 10,
      status: {
        hp: 10,
        effects: []
      },
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
    },

    {
      portrait: portraits.robo,
      name: "robo",
      hero: true,
      maxhp: 10,
      status: {
        hp: 10,
        effects: []
      },
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
    },

    {
      portrait: portraits.marle,
      name: "marle",
      hero: false,
      maxhp: 10,
      status: {
        hp: 10,
        effects: []
      },
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
    },

    {
      portrait: portraits.marle,
      name: "marle",
      hero: false,
      maxhp: 10,
      status: {
        hp: 10,
        effects: []
      },
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
      target: 1,
      action: {
        type: attack,
        mod: 3,
        damage: 15
      }
    },

    {
      author: 1,
      target: 2,
      action: {
        type: attack,
        mod: 3,
        damage: 15
      }
    },

    {
      author: 2,
      target: 1,
      action: {
        type: attack,
        mod: 3,
        damage: 15
      }
    }
  ]
};


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
          ? { ...actor, dead: false }
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
