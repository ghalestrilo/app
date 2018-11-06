import { PICK_ADVENTURE } from "../types";

export const pickAdventure = index => ({
  type: PICK_ADVENTURE,
  payload: index
})