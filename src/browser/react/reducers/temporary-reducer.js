'use strict';

import { TEMPORARY } from '../constants';

export const temporary = (state = { temp: [] }, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case TEMPORARY:
      newState.push(1)
      break;
    default:
      return state
  }
  return newState;
};
