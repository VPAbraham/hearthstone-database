import { combineReducers } from 'redux';
import { currentCards } from './currentCards';

export const rootReducer = combineReducers({
  currentCards,
});