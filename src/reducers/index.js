import { combineReducers } from 'redux';
import { cards } from './cards';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
  cards,
  isLoading
});