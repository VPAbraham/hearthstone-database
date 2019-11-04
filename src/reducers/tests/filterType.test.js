import { filterType } from '../filterType';

describe('filterCriteria', () => {
  it('should return the initial state', () => {
    //setup
    const expected = null;
    //execution
    const result = filterType(undefined, '')
    //expectation
    expect(result).toEqual(expected)
  });

  it('should be able to set the currently selected filter criteria', () => {
    //setup
    const initialState = null;
    //execution
    const action = {
      type: 'SET_FILTER_TYPE',
      filterType: 'rarity'
    }
    const expected = 'rarity'
    const result = filterType(initialState, action)
    //expectation
    expect(result).toEqual(expected)
  })
});