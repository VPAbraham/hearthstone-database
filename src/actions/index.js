export const setFilterType = (filterType) => ({
  type: "SET_FILTER_TYPE",
  filterType
})

export const setFilterCriteria = (filterCriteria) => ({
  type: "SET_FILTER_CRITERIA",
  filterCriteria
})

export const setCardCollection = (cards) => ({
  type: 'SET_CARD_COLLECTION',
  cards
})

export const toggleLoading = (boolean) => ({
  type: "TOGGLE_LOADING",
  boolean
})

