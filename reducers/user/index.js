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
    console.log(action.payload);
    return action.payload ? action.payload : state;

  case "RECEIVE_ADD_USER":
    console.log(action.payload);
    return action.payload ? action.payload : state;

  case "SIGNUP_FAILURE":
    return state;


  default: return state;
  }
};

export default user;
