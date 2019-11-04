import React from 'react';
import { shallow } from 'enzyme';
import { FilterBar, mapStateToProps, mapDispatchToProps } from './FilterBar';
import { setCardCollection, setFilterType, setFilterCriteria, toggleLoading } from '../../actions/index';

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

describe('mapStateToProps', () => {
  it('should return the filterCriteria', () => {
    const mockState = {
      filterCriteria: 'Fire'
    }

    const expected = {
      filterCriteria: 'Fire' 
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);

  });

  it('should be able to set filterType', () => {
    const mockState = {
      filterType: 'type'

    }

    const expected = {
      filterType: 'type'
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected);

  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch to set the filter criteria when an icon is clicked', () => {
    const mockProps = 'Fire'
    const mockDispatch = jest.fn();
    const actionToDispatch = setFilterCriteria('Fire')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setFilterCriteria(mockProps)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('calls dispatch to set the filter criteria when an icon is clicked', () => {
    const mockProps = 'set'
    const mockDispatch = jest.fn();
    const actionToDispatch = setFilterType('set')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setFilterType(mockProps)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('calls dispatch to toggle loading when an cards are being loaded', () => {
    const mockProps = false
    const mockDispatch = jest.fn();
    const actionToDispatch = toggleLoading(false)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleLoading(mockProps)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('calls dispatch to set cards when a new card set is chosen', () => {
    const mockProps = {name: 'some Pokemon', hp: '70'}
    const mockDispatch = jest.fn();
    const actionToDispatch = setCardCollection({ name: 'some Pokemon', hp: '70' })
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setCardCollection(mockProps)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})