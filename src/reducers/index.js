import { combineReducers } from 'redux';
import { cards } from './cards';
import { isLoading } from './isLoading';
import { filterType } from './filterType';
import { filterCriteria } from './filterCriteria';
import { selCard } from './selCard';


export const rootReducer = combineReducers({
  cards,
  isLoading,
  filterType,
  filterCriteria,
  selCard
});