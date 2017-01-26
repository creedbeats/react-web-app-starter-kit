import e from '../actionTypes';

const defaultState = {};

export default function (state = defaultState, action) {
  switch (action.type) {
  case e.GET_USER:
    return { ...state, ...action.user };
  default:
    return state;
  }
}
