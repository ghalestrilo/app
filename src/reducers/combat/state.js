import { avatars } from"../../images";

import { actionTypes } from "../../util/rules";
const { ability, spell, attack, flee, item } = actionTypes;

const initialState = {
  ongoing: true,
  result: null,
  player: 0,
  actors: [
    {
      avatar: avatars.heroes.crono,
      name: "Crono",
      hero: true,
      maxhp: 100,
      status: {
        hp: 100,
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
        }
      ]
    },

    {
      avatar: avatars.heroes.robo,
      name: "Robo",
      hero: false,
      maxhp: 100,
      status: {
        hp: 100,
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
        }
      ]
    },

    {
      avatar: avatars.heroes.marle,
      name: "Marle",
      hero: true,
      maxhp: 60,
      status: {
        hp: 60,
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
          name: "fireball",
          damage: 10,
          avatar: avatars.actions.fireball
        },
        {
          type: spell,
          name: "firebolt",
          damage: 20,
          avatar: avatars.actions.firebolt
        },
        {
          type: spell,
          name: "immolation",
          damage: 5,
          avatar: avatars.actions.immolation
        }
      ]
    },
    {
      avatar: avatars.heroes.lucca,
      name: "Lucca",
      hero: true,
      maxhp: 80,
      status: {
        hp: 80,
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
          name: "ice spear",
          damage: 20,
          avatar: avatars.actions.icespear,
          effects: [
            {
              type: "freeze",
              duration: 2,
              chance: 0.5
            }
          ]
        },
        {
          type: spell,
          name: "frost bolt",
          damage: 5,
          avatar: avatars.actions.frostbolt
        },
        {
          type: spell,
          name: "healing touch",
          healing: 20,
          avatar: avatars.actions.healing
        }
      ]
    }
  ],
  events: []
};

export default initialState;
