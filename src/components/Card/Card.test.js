import React from 'react';
import { Card, mapDispatchToProps } from './Card';
import { shallow } from 'enzyme';
import { setSelectedCard } from '../../actions';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card 
      name={'Charizard' || 'N/A'}
      imageUrl={'www.image.com' || 'N/A'}
      pokedexNum={123 || 'N/A'}
      hp={'70' || 'N/A'}
      types={['Fire'] || 'N/A'}
      attacks={['Ember', 'Fire Blast'] || 'N/A'}
      resistances={['Rock'] || 'N/A'}
      weaknesses={['Water'] || 'N/A'}
      rarity={'Rare' || 'N/A'}
      key={1}
      set='Base 1'
      artist='Some Guy'
    />)
  })
  it('should match the snapshot with the data passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapDispatchToProps', () => {
    it('calls dispatch to set the selected card when select card', () => {
      const mockProps = { name: 'Magikarp', hp: '40', rarity: 'Common' }
      const mockDispatch = jest.fn();
      const actionToDispatch = setSelectedCard({name: 'Magikarp', hp: '40', rarity: 'Common'})
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setSelectedCard(mockProps)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
})