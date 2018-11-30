import initialState from "./state.js";
import {
  NEW_EVENT,
  FINISH_COMBAT,
  BEGIN_COMBAT

} from "../../actions/types";

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





// Combat Logic

const ability = "habilidade";
const spell = "magia";
const attack = "ataque";
const flee = "fugir";
const item = "item";

const cannotPlay = actor =>
  (actor.status.dead === true) ||
  (actor.status.fled === true);

// const success = chance =>

const capMax = max => value => (value > max ? max : value);
const capMin = min => value => (value < min ? min : value);

const modifyAt = (index, arr) =>
  callback => arr.map(
    (element, i) => ((i === index)
      ? callback(element)
      : element));

const applyAction = action =>
  actor => checkDeath({
    ...actor,
    status: {
      ...actor.status,
      hp: actor.status.hp
        - (action.damage || 0)
        + (action.healing || 0),
      effects: (actor.effects || [])
        .map(eff => ({ ...eff, duration: eff.duration - 1 }))
        .filter(eff => eff.duration > 0)
        + (action.effects || []),

      fled: action.type === flee
    }
  });

const checkDeath = actor => ({
  ...actor,
  status: {
    ...actor.status,
    dead: (actor.status.hp <= 0)
  }
});

const nextplayer = (player, actors) =>
  ((player + 1 < actors.length)
    ? (cannotPlay(actors[player + 1])
      ? nextplayer(player + 1, actors)
      : player + 1)
    : (cannotPlay(actors[0])
      ? nextplayer(0, actors)
      : 0));

const shuffle = array =>
  array.sort(() => (Math.random() % 2 === 0));

const buildCombatFromEvent = event => ({
  actors: shuffle([
    ...event.enemies,
    ...event.heroes.filter(hero => hero.picked)
  ]),
  events: [],
  ongoing: true,
  player: 0,
  result: null
});
