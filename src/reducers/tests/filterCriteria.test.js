import { filterCriteria } from '../filterCriteria';

describe('filterCriteria', () => {
  it('should return the initial state', () => {
    //setup
    const expected = null;
    //execution
    const result =  filterCriteria(undefined, '')
    //expectation
    expect(result).toEqual(expected)
  });

  it('should be able to set the currently selected filter criteria', () => {
    //setup
    const initialState = null;
    //execution
    const action = {
      type: 'SET_FILTER_CRITERIA',
      filterCriteria: 'water'
    }
    const expected = 'water'
    const result = filterCriteria(initialState, action)
    //expectation
    expect(result).toEqual(expected)
  })
});