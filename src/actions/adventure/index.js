import { database as API } from "../../util";
import {
  REQUEST_ERROR,
  REQUEST_GET_ADVENTURES,
  RECEIVE_GET_ADVENTURES,
  DEL_ADVENTURE,
  RECEIVE_GET_PLAYERS,
  REQUEST_GET_PLAYERS,
  SET_SESSION,
  BEGIN_SESSION
} from "../types";

export const addAdventure = newAdventure => dispatch => {
  newAdventure.id = Date.now();
  return API.ref("/adventures/" + newAdventure.id).set(newAdventure).then(() => {
    getAdventures();
  }).catch(err => {
    dispatch({
      type: REQUEST_ERROR,
      payload: err
    });
  });
};

export const getAdventures = () => dispatch => {
  dispatch({
    type: REQUEST_GET_ADVENTURES
  });
  return API.ref("/adventures").on("value", snapshot => {
    dispatch({
      type: RECEIVE_GET_ADVENTURES,
      payload: snapshot.val()
    });
  });
};

export const delAdventure = adventure => dispatch => (
  API.ref("/adventures/"+adventure.id).remove().then(() => {
    dispatch({
      type: DEL_ADVENTURE
    });
  })
);

export const updateAdventure = adventure => dispatch => (
  API.ref("/adventures/"+adventure.id).set(adventure, error => {
    if (error) {
      dispatch({
        type: REQUEST_ERROR,
        payload: error
      });
    } else {
      getAdventures();
    }
  })
);

export const setNextSession = (id, nextSession) => dispatch => (
  API.ref(`/adventures/${id}/nextSession`).set(nextSession, error => {
    if (error) {
      dispatch({
        type: REQUEST_ERROR,
        payload: error
      });
    } else {
      dispatch({
        type: SET_SESSION,
        payload: nextSession
      });
    }
  })
);

export const addPlayer = (adventureID, newPlayer) => dispatch => (
  API.ref(`/adventures/${adventureID}/heroes/${newPlayer.name}`).set(newPlayer).then(() => {
    getPlayers(adventureID);
  }).catch(err => {
    dispatch({
      type: REQUEST_ERROR,
      payload: err
    });
  })
);

export const getPlayers = adventureID => dispatch => {
  dispatch({
    type: REQUEST_GET_PLAYERS
  });
  return API.ref(`/adventures/${adventureID}/heroes`).on("value", snapshot => {
    dispatch({
      type: RECEIVE_GET_PLAYERS,
      payload: snapshot.val()
    });
  });
};

export const beginSession = adventureData => dispatch => {
  dispatch({
    type: BEGIN_SESSION,
    payload: adventureData
  });
};
