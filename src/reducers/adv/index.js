export const initialAdventures = [
  // {
  //   title: 'A aventura eterna',
  //   image: require(),
  //   nextSession: '',
  //   progress: 40
  // }
];
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

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
  case ADD_ADVENTURE:
    return [ action.payload, ...state ];
  case DEL_ADVENTURE:
    return state.filter(element => element !== action.payload);

  default: return state;
  }
};

export default adv;
