/* @flow */
import type { Action } from '../Types';

type State = {|
  username: string,
  password: string,
  isLoggedIn: boolean,
|};

const initialState: State = {
  username: '',
  password: '',
  isLoggedIn: false,
};

const LoginReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.payload, isLoggedIn: true };
    case 'LOGOUT':
      return { ...initialState, isLoggedIn: false };
    default:
      return state;
  }
};

export default LoginReducer;
