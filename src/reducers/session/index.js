const initialState = {};

import {
  FINISH_COMBAT
} from "../../actions/types";

const session = (state = initialState, action) => {
  switch(action.type){
  case FINISH_COMBAT:
    return state;

  default: return state;
  }
};

export default session;
