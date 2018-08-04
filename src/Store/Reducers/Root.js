import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import AppReducer from './NavigationReducer';

const mainReducer = combineReducers({
  LoginReducer,
  AppReducer,
});

export default mainReducer;
