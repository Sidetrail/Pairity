/* @flow */
export type ActionCreator = (
  string,
  string,
) => {|
  type: string,
  payload: Object,
|};

export type Action = {|
  type: string,
  payload: Object,
|};

type NavigationRoute = {
  routeName: string,
  key: string,
};

export type NavigationState = {|
  index: number,
  routes: Array<NavigationRoute>,
|};
