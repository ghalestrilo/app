import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_FAILURE
} from "./actions";

export const initialUser = {
  email: "",
  senha: "",
  nome: "",
  datanasc: "",
  sexo: ""
};


const user = (state = initialUser, action) => {
  switch (action.type) {
  case "LOGIN_SUCCESS":
    return state;

  case "LOGIN_FAILURE":
    return state;

  case "REQUEST_ADD_USER":
    return action.payload ? action.payload : state;

  case "RECEIVE_ADD_USER":
    return action.payload ? action.payload : state;

  case "REQUEST_ERROR":
    throw new Error(action.payload);

  case "SIGNUP_FAILURE":
    return state;


  default: return state;
  }
};

export default user;
