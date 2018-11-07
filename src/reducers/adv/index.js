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

const adv = (state = initialAdventures, action) => {
  switch (action.type) {
  case ADD_ADVENTURE:
    return [ ...state, action.payload ];
  case "DELETE_ADVENTURE":
    return state.splice(action.payload, 1);

  default: return state;
  }
};

export default adv;
