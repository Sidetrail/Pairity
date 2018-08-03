import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';

const mainReducer = combineReducers({
  LoginReducer,
});

export default mainReducer;
