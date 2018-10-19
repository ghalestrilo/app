import { combineReducers } from 'redux';
import { createStore } from 'redux'
import userReducer from './user/reducer'

const reducer = combineReducers({
  user: userReducer
});

const store = createStore(reducer)

export default store