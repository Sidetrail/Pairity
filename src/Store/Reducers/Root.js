import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavigationReducer from './NavigationReducer';

const mainReducer = combineReducers({
  LoginReducer,
  NavigationReducer,
});

export default mainReducer;
