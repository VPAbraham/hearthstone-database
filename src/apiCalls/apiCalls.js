const cardUrl = 'https://api.pokemontcg.io/v1/cards';


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
  const response = await fetch(cardUrl);
  const rawData = await response.json();
  const rawCards = await rawData.cards;
  const data = cleanCardData(rawCards)
  console.log(data);
  return data  
}

