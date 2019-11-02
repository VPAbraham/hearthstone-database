export const cards = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARD_COLLECTION':
      return action.cards
      default:
        return state
  }
}