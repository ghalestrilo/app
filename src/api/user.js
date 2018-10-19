import { firebaseDatabase } from "../utils/firebaseUtils";

export const registerUser = (user) => {
  // console.warn(user);
  return firebaseDatabase.ref("users/" + user.username).set({
    name: user.name,
    username: user.username,
    password: user.password
  });
};
