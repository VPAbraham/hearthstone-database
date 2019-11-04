import { cards } from '../cards';

describe('cards', () => {
  it('should return the initial state', () => {
    //setup
    const expected = [];
    //execution
    const result = cards(undefined, [])
    //expectation
    expect(result).toEqual(expected)
  })

  it('should be able to return a set of cards', () => {
    //setup
    const initialState = [];
    const action = {
      type: 'SET_CARD_COLLECTION',
      cards: [
        { name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed' },
        { name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed' }
      ]
    };
    //execution
    const expected = [
      { name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed' },
      { name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed' }
    ]
    
    const result = cards(initialState, action)

    expect(result).toEqual(expected)
  })
})