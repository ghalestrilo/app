import {
  PICK_ADVENTURE,
  ADD_ADVENTURE,
  DELETE_ADVENTURE
} from "../types";

export const pickAdventure = index => ({
  type: PICK_ADVENTURE,
  payload: index
});

export const deleteAdventure = index => ({
  type: DELETE_ADVENTURE,
  payload: index
});

export const addAdventure = newAdventure => ({
  type: ADD_ADVENTURE,
  payload: newAdventure
});
