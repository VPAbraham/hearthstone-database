import React from 'react';
import { shallow } from 'enzyme';
import { FilterBar, mapStateToProps, matchDispatchToProps } from './FilterBar';

describe('FilterBar', () => {
  beforeEach(() => {
    const mockSetCardCollection = jest.fn()
    const mockSetFilterCriteria = jest.fn()
    const mocksetFilterType = jest.fn()
  })
  it('should match the snapshot', () => {
    let wrapper = shallow(
      <FilterBar 
        filterCriteria={''}
        filterType={''}
        setCardCollection={jest.fn()}
        setFilterType={jest.fn}
        setFilterCriteria={jest.fn}
        />
    )
    expect(wrapper).toMatchSnapshot()
  })
})