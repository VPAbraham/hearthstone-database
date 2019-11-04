import React from 'react';
import { shallow } from 'enzyme';
import { FilterBar, mapStateToProps, matchDispatchToProps } from './FilterBar';

describe('FilterBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <FilterBar 
        filterCriteria={''}
        filterType={''}
        setCardCollection={jest.fn()}
        setFilterType={jest.fn}
        setFilterCriteria={jest.fn}
        />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})