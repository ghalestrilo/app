import { combineReducers } from 'redux';
import dummyReducer from './dummy'

export default combineReducers({
  // articles : articleReducer
  dummy: dummyReducer
});