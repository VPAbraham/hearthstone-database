import React from 'react';
import { shallow } from 'enzyme';
import { CardInfo, mapStateToProps } from './CardInfo';

describe('CardInfo', () => {
  let wrapper;
  beforeEach(() => {
    const mockSelCard = {name: 'Cubone', type: 'Fighting', hp:'70', types:['Fire'], attacks:['Poop throw']}

    wrapper = shallow(
      <CardInfo 
      selCard={mockSelCard}
      />
      )
  })
  it('should match the snapshot with data passed through', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mapStateToProps', () => {
  it('should return a selected card object', () => {
    const mockState = { selCard: { name: 'Cubone', type: 'Fighting', hp: '70', types: ['Fire'], attacks: ['Poop throw'] }};
    const expected = { selCard: { name: 'Cubone', type: 'Fighting', hp: '70', types: ['Fire'], attacks: ['Poop throw'] } };

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected);

  })
})