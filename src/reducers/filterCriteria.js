export const filterCriteria = (state = null, action) => {
  switch (action.type) {
    case 'SET_FILTER_CRITERIA':
      return action.filterCriteria
      default:
        return state
  }
}