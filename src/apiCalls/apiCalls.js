  export const getAllCards = async (hi) => { 
  const response = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/", {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const getCardsByClass = async (playerClass) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${playerClass}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const getCardByType = async (cardType) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/${cardType}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const getCardsByQuality = async (cardQuality) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/${cardQuality}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const getCardsBySet = async (cardSet) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${cardSet}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const getCardsBySearch = async (cardName) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${cardName}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}

export const retrieveCardData = async (dbfId) => {
  const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${dbfId}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      "x-rapidapi-key": "5f79c75fb8msh667198defcb0eb4p19a6e3jsnd10cd6e77216"
    }
  })
  const data = await response.json()
  console.log(data)
  return data
}