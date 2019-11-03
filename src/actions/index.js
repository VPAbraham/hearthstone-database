export const setFilter = (currentCards) => ({
  type: "SET_CURRENT_CARDS",
  currentCards
})

export const setCardCollection = (cards) => ({
  type: 'SET_CARD_COLLECTION',
  cards
})

export const toggleLoading = (isLoading) => ({
  type: "TOGGLE_LOADING",
  isLoading
})

