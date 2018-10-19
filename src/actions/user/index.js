// Carregamentos assincronos da DB virao aqui
import { registerUser } from "../../api";

export const requestLogin = (username, password) => {
  success = true;
  userdata = {};
  console.warn("ACTION CREATED!", username, password);

  // 1. Promise login to database, dispatch pending response action.
  // 2. Dispatch resolve/reject
  //  - Resolve: make another call to database, fetch user data and return
  //  - Reject: return login failure and message.

  return success
    ? {
      type: "LOGIN_SUCCESS",
      payload: userdata
    }
    : { type: "LOGIN_FAILURE", payload: "" };
};

export const requestSignup = (user) => {
  const response = registerUser(user).then(docRef => {
    console.warn(docRef);
  }).catch(e => console.warn(e));
  console.log("signup", response);
};
