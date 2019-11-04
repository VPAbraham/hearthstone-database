import { selCard } from '../selCard';

describe('selCard', () => {
  it('should return the initial state', () => {
    const expected = {}
    const result = selCard(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should be able to set a currently selected card to state', () => {
    const initialState = {};
    const action = {
      type:'SET_SELECTED_CARD',
      selCard: {name: 'Marowak'}
    }
    const expected = {name: 'Marowak'}
    const result = selCard(initialState, action)

    expect(result).toEqual(expected)
  })
});