// Carregamentos assincronos da DB virao aqui
import { userRef as UserAPI } from "../../util";
import { FETCH_USER, REQUEST_ADD_USER, RECEIVE_ADD_USER, REQUEST_ERROR } from "../types";

export const addUser = newUser => dispatch => {
  dispatch({
    type: REQUEST_ADD_USER,
    payload: null
  });
  return UserAPI.push().set(newUser).then(() =>
    dispatch({
      type: RECEIVE_ADD_USER,
      payload: newUser
    })
  ).catch(err => {
    dispatch({
      type: REQUEST_ERROR,
      payload: err
    });
  });
};

export const getUsers = () => dispatch => {
  return UserAPI.on("value", snapshot => {
    dispatch({
      type: FETCH_USER,
      payload: snapshot.val()
    });
  });
};
