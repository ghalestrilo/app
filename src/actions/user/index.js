// Carregamentos assincronos da DB virao aqui
import { userRef as UserAPI } from "../../util";
import {
  FETCH_USER,
  REQUEST_ADD_USER,
  RECEIVE_ADD_USER,
  REQUEST_ERROR,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  RECEIVE_LOGIN_ERROR
} from "../types";

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

export const login = loginObject => dispatch => {
  console.log("chamou o login na action");
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
  return UserAPI.child(loginObject.email).on("value", snapshot => {
    const user = snapshot.val();
    if (user && user.password && user.email) {
      if (loginObject.password === snapshot.val().password) {
        dispatch({
          type: RECEIVE_LOGIN,
          payload: snapshot.val()
        });
      } else {
        dispatch({
          type: RECEIVE_LOGIN_ERROR,
          payload: "Erro: Senha Incorreta"
        });
      }
    } else {
      dispatch({
        type: RECEIVE_LOGIN_ERROR,
        payload: "Erro: Usuário Não Encontrado"
      });
    }
  });
};
