import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC5hIUffHTZc7RPXPxhU8MuB85GqWAi3_w",
  authDomain: "igor-dev-apps.firebaseapp.com",
  databaseURL: "https://igor-dev-apps.firebaseio.com",
  projectId: "igor-dev-apps",
  storageBucket: "igor-dev-apps.appspot.com",
  messagingSenderId: "463098371234"
};

firebase.initializeApp(config);

export const database = firebase.database();

