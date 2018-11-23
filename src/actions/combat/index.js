import {
  NEW_EVENT
} from "../types";

export const newEvent = event => ({
  type: NEW_EVENT,
  payload: event
});
