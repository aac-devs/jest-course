const getData = require('../src/promise');
const API = 'https://pokeapi.co/api/v2/berry/cheri';

it('debería retornar la información de cheri', () => {
  return getData(API).then((response) => {
    expect(response.data.name).toBe('cheri');
  });
});

it('debería fallar por url inválida', () => {
  expect.assertions(1);
  return getData('fdasfssgdsa').catch((error) => expect(error).not.toBeNull());
});
