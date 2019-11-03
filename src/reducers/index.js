import { combineReducers } from 'redux';
import { cards } from './cards';
import { isLoading } from './isLoading';
import { filterType } from './filterType';
import { filterCriteria } from './filterCriteria';


export const rootReducer = combineReducers({
  cards,
  isLoading,
  filterType,
  filterCriteria
});