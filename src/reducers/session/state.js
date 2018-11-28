const ability = "habilidade";
const spell = "magia";
const attack = "ataque";
const flee = "fugir";
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

const state = {
  heroes: [
    {
      avatar: avatars.crono,
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
      avatar: avatars.robo,
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
      avatar: avatars.marle,
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
  ]
};

export default state;
