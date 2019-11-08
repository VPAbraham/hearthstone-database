import { apiCalls, getCards } from './apiCalls';
import { exportAllDeclaration } from '@babel/types';

describe('apiCalls', () => {

  it('should call fetch with the correct url', () => {
    getCards();

    expect(window.fetch).toHaveBeenCalledWith('https://api.pokemontcg.io/v1/cards')
  })
})