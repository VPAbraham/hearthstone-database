const baseUrl = 'https://api.pokemontcg.io/v1/cards';
const pageHeader = '?page=5;'


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
  const rawData = await response.json();
  const rawCards = await rawData.cards;
  const data = cleanCardData(rawCards)
  return data  
}

export const getMoreCards = async () => {
  const request = new Request((baseUrl+pageHeader), {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Count': '400'
    })
  })
  const response = await fetch(request)
  const rawData = await response.json();
  const rawCards = await rawData.cards;
  const data = cleanCardData(rawCards)
  console.log(data);
  return data
}