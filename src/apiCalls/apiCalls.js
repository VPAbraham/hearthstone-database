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
  console.log(filterType, filterCriteria)

  generateCardUrl(baseUrl, filterType, filterCriteria)
  const response = await fetch(baseUrl + pageHeader);

  const rawData = await response.json();

  const rawCards = await rawData.cards;

  const data = cleanCardData(rawCards)

  return data  
}

const generateCardUrl = (base, filterType, filterCriteria, page) => {
  console.log(filterType, filterCriteria)

  if(filterType === 'types') {
    console.log('got types', filterCriteria)
  } else if (filterType === 'rarity') {
    console.log('got rarity', filterCriteria)
  } else if (filterType === 'set'){
    console.log('got set', filterCriteria)
  }
}