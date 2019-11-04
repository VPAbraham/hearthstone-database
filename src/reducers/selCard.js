export const selCard = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CARD':
      return action.selCard
      default:
        return state
  }
}