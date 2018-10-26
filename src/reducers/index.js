import { combineReducers } from "redux";
import userReducer from "./user";
import advReducer from "./adv";

export default combineReducers({
  user: userReducer,
  adventures: advReducer
});
