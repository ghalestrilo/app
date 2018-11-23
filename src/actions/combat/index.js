import {
  NEW_EVENT,
  FINISH_COMBAT
} from "../types";

export const newEvent = event => ({
  type: NEW_EVENT,
  payload: event
});

export const finishCombat = result => ({
  type: FINISH_COMBAT,
  payload: result
});
