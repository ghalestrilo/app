const initialState = {
  enemies: [],
  events: []
};

const ADD_EVENT = "ADD_EVENT";

const combat = (state = initialState, action) => {
  switch(action.type){
  case ADD_EVENT:
    break;
  default:
    return state;
  }
};

export default combat;