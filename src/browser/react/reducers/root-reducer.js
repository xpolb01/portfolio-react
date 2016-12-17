'use strict';
import { combineReducers } from 'redux';
import { temporary } from './temporary-reducer';

export default combineReducers({
  one: temporary,
  two: temporary
});
