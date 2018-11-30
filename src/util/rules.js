



// Combat Logic
export const actionTypes = {
  ability: "habilidade",
  spell: "magia",
  attack: "ataque",
  flee: "fugir",
  item: "item"
};

export const cannotPlay = actor =>
  ((actor.status.dead === true) ||
  (actor.status.fled === true));

// export const success = chance =>

export const capMax = max => value => (value > max ? max : value);
export const capMin = min => value => (value < min ? min : value);

export const modifyAt = (index, arr) =>
  callback => arr.map(
    (element, i) => ((i === index)
      ? callback(element)
      : element));

export const applyAction = action =>
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

      fled: action.type === actionTypes.flee
    }
  });


export const shuffle = array =>
  array.sort(() => (Math.random() % 2 === 0));

export const checkDeath = actor => ({
  ...actor,
  status: {
    ...actor.status,
    dead: (actor.status.hp <= 0)
  }
});

export const nextplayer = (player, actors) =>
  (i => (cannotPlay(actors[i]) ? nextplayer(i, actors) : i))(player + 1 < actors.length ? player + 1 : 0);