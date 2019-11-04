import React from 'react';
import { shallow } from 'enzyme';
import { CardContainer, mapStateToProps} from './CardContainer';

describe('CardContainer', () => {
  let wrapper;
  beforeEach(() => {
    const mockCards = [
      { name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed' },
      { name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed' }
    ]

    wrapper = shallow(
      <CardContainer 
      cards={mockCards}
      />
    )
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapState to props for CardContainer', () => {
  it('should return the currently fetched cards', () => {
    const mockState = {
      cards: [
        { name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed' },
        { name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed' }
      ]
    }

    const expected = {
      cards: [
        { name: 'Vulpix', hp: '70', rarity: 'Common', set: 'HS-Unleashed' },
        { name: 'Charmeleon', hp: '70', rarity: 'Uncommon', set: 'FireRed' }
      ]
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);

  });
});