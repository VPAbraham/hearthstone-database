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
  console.log(genUrl)
  const response = await fetch(genUrl || baseUrl);
  const rawData = await response.json();

  const rawCards = await rawData.cards;
  console.log(rawCards)
  const data = cleanCardData(rawCards)

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