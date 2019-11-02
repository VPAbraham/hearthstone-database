export const currentCards = (state=[], action) => {
  switch (action.type) {
    case 'SET_CURRENT_CARDS':
      return action.cardData
    default:
      return state;
  }
}