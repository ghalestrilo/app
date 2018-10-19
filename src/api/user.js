import { firebaseDatabase } from "../utils/firebaseUtils";

export const registerUser = (user) => {
  // console.warn(user);
  firebaseDatabase.ref("users/" + user.username).set({
    username: user.username,
    name: user.name,
    password: user.password
  });
};
