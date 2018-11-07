import {
  PICK_ADVENTURE,
  ADD_ADVENTURE,
  DELETE_ADVENTURE
} from "../../actions/types";

export const initialAdventures = [
  // {
  //   title: 'A aventura eterna',
  //   image: require(),
  //   nextSession: '',
  //   progress: 40
  // }
]

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
    case ADD_ADVENTURE:
      return {
        ...state,
        list: state.list + action.payload
      }

    case DELETE_ADVENTURE:
      return {
        ...state,
        list: state.list.splice(action.payload, 1)
      }
    
    case PICK_ADVENTURE:
      return {
        ...state,
        chosen: list[action.payload]
      }

    default: return state;
  }
};

export default adv;
