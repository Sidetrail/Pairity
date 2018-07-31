import { combineReducers } from 'redux';
import UserReducer from './UserReducer';

const mainReducer = combineReducers({
  UserReducer,
});

export default mainReducer;
