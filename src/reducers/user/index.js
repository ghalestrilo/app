export const initialUser = {
  email: "",
  senha: "",
  nome: "",
  datanasc: "",
  sexo: "",
  loading: false
};


const user = (state = initialUser, action) => {
  switch (action.type) {
  case "REQUEST_LOGIN":
    return { ...state, loading: true };
  case "RECEIVE_LOGIN":
    return action.payload ? action.payload : { ...state, loading: false };
  case "RECEIVE_LOGIN_ERROR":
    return action.payload ? action.payload : { ...state, loading: false };
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
