import {
  PICK_ADVENTURE,
  ADD_ADVENTURE,
  DELETE_ADVENTURE
} from "../../actions/types";

export const initialAdventures = {
  loading: false,
  list: [],
  chosen: {}
};

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
  case ADD_ADVENTURE:
    return {
      ...state,
      list: [ action.payload, ...state.list ]
    };

  case DELETE_ADVENTURE:
    return {
      ...state,
      list: state.list.splice(action.payload, 1)
    };

  case PICK_ADVENTURE:
    return {
      ...state,
      chosen: state.list[action.payload]
    };

  default: return state;
  }
};

export default adv;
