import { filterCriteria } from "../reducers/filterCriteria";

const baseUrl = 'https://api.pokemontcg.io/v1/cards';
const pageHeader = '?types=dragon&pageSize=10'


const cleanCardData = (data) => {
  return data.map(card => {
    const { name, imageUrl, nationalPokedexNumber, 
      hp, attacks, resistances, weaknesses, rarity,
      types, set, artist} = card
    const newCard = {
      name, 
      imageUrl, 
      nationalPokedexNumber, 
      hp, 
      attacks, 
      resistances, 
      weaknesses, 
      types,
      rarity,
      set, 
      artist      
    }
    return newCard
  })
}

export const getCards = async (filterType, filterCriteria) => {

  const genUrl = generateCardUrl(baseUrl, filterType, filterCriteria)
  const response = await fetch(genUrl || baseUrl);
  checkReponses(response)
  const rawData = await response.json();
  const rawCards = await rawData.cards;
  const data = cleanCardData(rawCards)
  checkContent(data)
  console.log(data)
  return data  
}

const generateCardUrl = (base, filterType, filterCriteria, page) => {
  
  const genUrl = () => {
      if(filterType === 'types') {
        return (base + '?types=' + filterCriteria)
    } else if (filterType === 'rarity') {
        return (base + '?rarity=' + filterCriteria)
    } else if (filterType === 'set'){
        return (base + '?set=' + filterCriteria)
    }
  }
  return genUrl()  
}

const checkReponses = (resp) => {
  if (resp.ok === true) {
    console.log('Succesful fetch!')
  } else {
    console.log(resp.status)
  }
}

const checkContent = (data) => {
  if (data.length > 1) {
    console.log('Received new card set')
  } else {
    console.log('No cards received')
  }
}