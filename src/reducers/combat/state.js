const ability = "ability";
const spell = "spell";
const attack = "attack";
const flee = "flee";
const item = "item";

const avatars = {
  crono: require("../../images/temp/portraits/crono.png"),
  ayla: require("../../images/temp/portraits/ayla.png"),
  lucca: require("../../images/temp/portraits/lucca.png"),
  marle: require("../../images/temp/portraits/marle.png"),
  robo: require("../../images/temp/portraits/robo.png"),

  fireball: require("../../images/spells/fire_ball.jpg"),
  firebolt: require("../../images/spells/fire_bolt.jpg"),
  immolation: require("../../images/spells/immolation.jpg"),
  icespear: require("../../images/spells/ice_spear.jpg"),
  frostbolt: require("../../images/spells/frost_bolt.jpg")
};




const initialState = {
  ongoing: true,
  player: 0,
  actors: [
    {
      avatar: avatars.crono,
      name: "crono",
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
      avatar: avatars.robo,
      name: "robo",
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
      avatar: avatars.marle,
      name: "marle",
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
          avatar: avatars.fireball
        },
        {
          type: spell,
          name: "firebolt",
          damage: 20,
          avatar: avatars.firebolt
        },
        {
          type: spell,
          name: "immolation",
          damage: 5,
          avatar: avatars.immolation
        }
      ]
    },
    {
      avatar: avatars.lucca,
      name: "lucca",
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
          avatar: avatars.icespear,
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
          avatar: avatars.frostbolt
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

export default initialState;