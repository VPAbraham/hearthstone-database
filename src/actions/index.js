export const setCurrentCards = (currentCards) => ({
  type: "SET_CURRENT_CARD",
  currentCards
})

export const toggleLoading = (isLoading) => ({
  type: "TOGGLE_LOADING",
  isLoading
})
