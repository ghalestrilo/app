const initialState = {
  ongoing: false,
  enemies: [],
  events: []
};

const NEW_EVENT = "NEW_EVENT";
const KILL_ENEMY = "KILL_ENEMY";

const combat = (state = initialState, action) => {
  switch(action.type){

  case NEW_EVENT:
    return state;

  case KILL_ENEMY:
    return {
      ...state,
      enemies: state.enemies.unshift(action.payload)
    }

  default:
    return state;
  }
};

export default combat;