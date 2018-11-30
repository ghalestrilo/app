import {
  CONFIGURE_COMBAT,
  BEGIN_COMBAT,
  TOGGLE_HERO,
  CANCEL,

  ADD_ENEMY,
  PICK_ENEMY,
  REMOVE_ENEMY,

  NEW_EVENT
} from "../types";

export const newEvent = event => ({
  type: NEW_EVENT,
  payload: event
});

export const addEnemy = () => ({
  type: ADD_ENEMY,
  payload: null
});

export const toggleHero = i => ({
  type: TOGGLE_HERO,
  payload: i
});

export const pickEnemy = i => ({
  type: PICK_ENEMY,
  payload: i
});

export const removeEnemy = i => ({
  type: REMOVE_ENEMY,
  payload: i
});

export const configureCombat = heroes => ({
  type: CONFIGURE_COMBAT,
  payload: { heroes }
});

export const beginCombat = combat => ({
  type: BEGIN_COMBAT,
  payload: combat
});
