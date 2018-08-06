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
