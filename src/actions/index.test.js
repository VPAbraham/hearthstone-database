import * as actions from './';

describe('actions', () => {

  describe('SET_FILTER_TYPE', () => {
    it('should have a type of SET_FILTER_TYPE', () => {
        //setup

        const mockFilterType = 'type'
    
        const expectedAction = {
          type: 'SET_FILTER_TYPE',
          filterType: 'type'
        }
    
        //execution
    
        const result = actions.setFilterType(mockFilterType)
    
        //expectation
    
        expect(result).toEqual(expectedAction)

    });
  });

  describe('SET_FILTER_CRITERIA', () => {
    it('should have a type of SET_FILTER_CRITERIA', () => {
      //setup
      const mockFilterCriteria = 'fire'

      const expectedAction = {
        type: 'SET_FILTER_CRITERIA',
        filterCriteria: 'fire'
      }
      //execution
      const result = actions.setFilterCriteria(mockFilterCriteria)
      
      //expectation
      expect(result).toEqual(expectedAction)
    });
  });

  describe('SET_CARD_COLLECTION', () => {
    it('should have a type of SET_CARD_COLLECTION', () => {
    //setup
    const mockCards = [
      {name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed'},
      {name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed'}
    ]

    const expectedAction = {
      type: 'SET_CARD_COLLECTION',
      cards: [
        { name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed' },
        { name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed' }
      ]
    }

    //execution
    const result = actions.setCardCollection(mockCards)

    //expectation

    expect(result).toEqual(expectedAction)

    });
  });

  describe('TOGGLE_LOADING', () => {
    it('should have a type of TOGGLE_LOADING', () => {
      const mockBool = true;

      const expectedAction = {
        type: 'TOGGLE_LOADING',
        boolean: true
      }

      // execution
      const result = actions.toggleLoading(mockBool)
      
      // expectation
      expect(result).toEqual(expectedAction)
    });
  });

  describe('SET_SELECTED_CARD', () => {
    it('should have a type of SET_SELECTED_CARD', () => {
      const mockCard = {name: 'Marowak', hp: '70', rarity: 'Uncommon'}

      const expectedAction = {
        type: 'SET_SELECTED_CARD',
        selCard: { name: 'Marowak', hp: '70', rarity: 'Uncommon' }
      }

      const result = actions.setSelectedCard(mockCard)
      expect(result).toEqual(expectedAction)
    })
  })


});