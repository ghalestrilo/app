import { combineReducers } from "redux";
import userReducer from "./user";
import advReducer from "./adv";

import combatReducer from "./combat";

export default combineReducers({
  user: userReducer,
  adventures: advReducer,
  combat: combatReducer
});
