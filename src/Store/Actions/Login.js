export const loginAction = (username, password) => ({
  type: 'LOGIN',
  payload: {
    username,
    password,
  },
});

export const logoutAction = () => ({
  type: 'LOGOUT',
  payload: {},
});
