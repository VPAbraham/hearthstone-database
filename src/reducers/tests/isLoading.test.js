import { isLoading } from '../isLoading';
import { toggleLoading } from '../../actions';

describe('isLoading', () => {
  it('should be able to return its initial value' , () => {
    //setup
    const expected = false;

    const result = isLoading(undefined, false);

    expect(result).toEqual(expected)
  });

  it('should be able to toggle whether the page is loading', () => {
    const initialState = false;

    const action = {
      type: 'TOGGLE_LOADING',
      boolean: true
    }

    const expected = { "boolean": false, "type": "TOGGLE_LOADING" }
  
  const result = toggleLoading(initialState, action)

  expect(result).toEqual(expected)
  })
});