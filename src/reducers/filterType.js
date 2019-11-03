export const filterType = (state = null, action) => {
  switch (action.type) {
    case 'SET_FILTER_TYPE':
      return action.filterType
    default:
      return state
  }
}