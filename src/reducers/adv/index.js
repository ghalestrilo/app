import { PICK_ADVENTURE, ADD_ADVENTURE, DEL_ADVENTURE, SET_EDIT } from "../../actions/types";
export const initialAdventures = {
  chosen: {},
  list: [],
  edit: ""
  // {
  //   title: 'A aventura eterna',
  //   image: require(),
  //   nextSession: '',
  //   progress: 40
  // }
};
export const addAdventure = newAdventure => ({
  type: ADD_ADVENTURE,
  payload: newAdventure
});

export const delAdventure = adventure => ({
  type: DEL_ADVENTURE,
  payload: adventure
});

export const pickAdventure = adventure => ({
  type: PICK_ADVENTURE,
  payload: adventure
});

export const setEdit = edit => ({
  type: SET_EDIT,
  payload: edit
});

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
  case ADD_ADVENTURE:
    return {
      ...state,
      list: [ action.payload, ...state.list ]
    };
  case DEL_ADVENTURE:
    return {
      ...state,
      list: state.list.filter(element => element !== action.payload)
    };
  case PICK_ADVENTURE:
    return{
      ...state,
      chosen: action.payload
    };
  case SET_EDIT:
    return{
      ...state,
      edit: action.payload
    };

  default: return state;
  }
};

export default adv;
