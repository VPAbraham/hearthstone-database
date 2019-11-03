const baseUrl = 'https://api.pokemontcg.io/v1/cards';
const pageHeader = '?types=dragon&pageSize=120'


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

export const getCards = async () => {
  const response = await fetch(baseUrl + pageHeader);
  // const response = await fetch('baseUrl' {
  //   method: 'get',
  //   params: {
  //     Count: '200'
  //   }
  // })
  const rawData = await response.json();
  const rawCards = await rawData.cards;
  const data = cleanCardData(rawCards)
  return data  
}

const generateCardUrl = (base, filterType, filterCriteria, page) => {
  // if(filterType === 'types') {

  //   const genUrl = (base + '?types' + )
  //   return genUrl
  // }
}