/* @flow */
import type { ActionCreator } from '../Types';

export const loginAction: ActionCreator = (
  username: string,
  password: string,
) => ({
  type: 'LOGIN',
  payload: {
    username,
    password,
  },
});

export const logoutAction: ActionCreator = () => ({
  type: 'LOGOUT',
  payload: {},
});
