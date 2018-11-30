import { avatars } from "../../images";
const ability = "habilidade";
const spell = "magia";
const attack = "ataque";
const flee = "fugir";
const item = "item";


const state = {
  heroes: [
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
          avatar: avatars.spells.fireball
        },
        {
          type: spell,
          name: "firebolt",
          damage: 20,
          avatar: avatars.spells.firebolt
        },
        {
          type: spell,
          name: "immolation",
          damage: 5,
          avatar: avatars.spells.immolation
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
          avatar: avatars.spells.icespear,
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
          avatar: avatars.spells.frostbolt
        }
      ]
    }
  ],

  availableEnemies: [
    {
      avatar: avatars.enemies.robo,
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
      avatar: avatars.enemies.javali,
      name: "Javali",
      hero: false,
      maxhp: 50,
      status: {
        hp: 50,
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
          damage: 6
        }
      ]
    },
    {
      avatar: avatars.enemies.tigre,
      name: "Tigre",
      hero: false,
      maxhp: 70,
      status: {
        hp: 70,
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
          damage: 20
        }
      ]
    },
    {
      avatar: avatars.enemies.urso,
      name: "Urso",
      hero: false,
      maxhp: 200,
      status: {
        hp: 200,
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
      avatar: avatars.enemies.ogro,
      name: "Ogro",
      hero: false,
      maxhp: 1000,
      status: {
        hp: 1000,
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
          damage: 20
        }
      ]
    },
    {
      avatar: avatars.enemies.troll,
      name: "Troll",
      hero: false,
      maxhp: 150,
      status: {
        hp: 150,
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
          damage: 30
        }
      ]
    }
  ]
};

export default state;
