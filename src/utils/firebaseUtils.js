import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyC5hIUffHTZc7RPXPxhU8MuB85GqWAi3_w",
  authDomain: "igor-dev-apps.firebaseapp.com",
  databaseURL: "https://igor-dev-apps.firebaseio.com",
  projectId: "igor-dev-apps",
  storageBucket: "igor-dev-apps.appspot.com",
  messagingSenderId: "463098371234"
};
export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
