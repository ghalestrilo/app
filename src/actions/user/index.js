// Carregamentos assincronos da DB virao aqui
import { database as API } from "../../util";
import {
  FETCH_USER,
  REQUEST_ADD_USER,
  RECEIVE_ADD_USER,
  REQUEST_ERROR,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  RECEIVE_LOGIN_ERROR,
  LOGOUT
} from "../types";

export const addUser = newUser => dispatch => {
  dispatch({
    type: REQUEST_ADD_USER,
    payload: null
  });
  return API.ref("/users/" + newUser.email).set(newUser).then(() =>
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
  return API.ref("/users").on("value", snapshot => {
    dispatch({
      type: FETCH_USER,
      payload: snapshot.val()
    });
  });
};

export const login = loginObject => dispatch => {
  dispatch({
    type: REQUEST_LOGIN,
    payload: {
      loading: false
    }
  });
  if (!loginObject.email || !loginObject.password) {
    return dispatch({
      type: RECEIVE_LOGIN_ERROR,
      payload: "Erro: Campos em branco"
    });
  }
  return API.ref("/users/" + loginObject.email).on("value", snapshot => {
    const user = snapshot.val();
    if (user && user.password && user.email) {
      if (loginObject.password === user.password) {
        dispatch({
          type: RECEIVE_LOGIN,
          payload: user
        });
      } else {
        dispatch({
          type: RECEIVE_LOGIN_ERROR,
          payload: { error: "Erro: Senha Incorreta" }
        });
      }
    } else {
      dispatch({
        type: RECEIVE_LOGIN_ERROR,
        payload: { error: "Erro: Usuário Não Encontrado" }
      });
    }
  });
};

export const logout = () => dispatch => (dispatch({ type: LOGOUT }));
