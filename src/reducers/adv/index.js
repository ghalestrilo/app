import {
  PICK_ADVENTURE,
  DEL_ADVENTURE,
  REQUEST_GET_ADVENTURES,
  RECEIVE_GET_ADVENTURES,
  SET_EDIT,
  UNSET_EDIT,
  SET_SESSION
} from "../../actions/types";

export const initialAdventures = {
  chosen: {},
  list: [],
  edit: "",
  editMode: false,
  nextSession: ""
  // {
  //   title: 'A aventura eterna',
  //   image: require(),
  //   nextSession: '',
  //   progress: 40
  // }
};

export const setEditMode = () => ({
  type: SET_EDIT
});
export const unsetEditMode = () => ({
  type: UNSET_EDIT
});

export const delAdventure = adventure => ({
  type: DEL_ADVENTURE,
  payload: adventure
});

export const pickAdventure = adventure => ({
  type: PICK_ADVENTURE,
  payload: adventure
});


const adv = (state = initialAdventures, action) => {
  switch (action.type) {
  case REQUEST_GET_ADVENTURES:
    return state;
  case RECEIVE_GET_ADVENTURES:
    return {
      ...state,
      list: action.payload
    };
  case DEL_ADVENTURE:
    return state;
  case PICK_ADVENTURE:
    return{
      ...state,
      chosen: action.payload
    };
  case SET_SESSION:
    return{
      ...state,
      nextSession: action.payload
    };
  case SET_EDIT:
    return {
      ...state,
      editMode: true
    };
  case UNSET_EDIT:
    return {
      ...state,
      editMode: false
    };
  default: return state;
  }
};

export default adv;
