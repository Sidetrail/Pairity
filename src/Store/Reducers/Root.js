import { combineReducers } from 'redux';
import Login from './Login';
import Navigation from './Navigation';

const Root = combineReducers({
  Login,
  Navigation,
});

export default Root;
