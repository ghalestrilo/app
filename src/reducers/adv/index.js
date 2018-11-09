export const initialAdventures = {
  chosen: {},
  adventures: []
  // {
  //   title: 'A aventura eterna',
  //   image: require(),
  //   nextSession: '',
  //   progress: 40
  // }
};
export const ADD_ADVENTURE = "ADD_ADVENTURE";
export const addAdventure = newAdventure => ({
  type: ADD_ADVENTURE,
  payload: newAdventure
});

export const DEL_ADVENTURE = "DEL_ADVENTURE";
export const delAdventure = adventure => ({
  type: DEL_ADVENTURE,
  payload: adventure
});

export const CHOSE_ADVENTURE = "CHOSE_ADVENTURE";
export const choseAdventure = adventure => ({
  type: CHOSE_ADVENTURE,
  payload: adventure
});

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
  case ADD_ADVENTURE:
    return {
      ...state,
      adventures: [ action.payload, ...state.adventures ]
    };
  case DEL_ADVENTURE:
    return {
      ...state,
      adventures: state.adventures.filter(element => element !== action.payload)
    };
  case CHOSE_ADVENTURE:
    return{
      ...state,
      chosen: action.payload
    };

  default: return state;
  }
};

export default adv;
