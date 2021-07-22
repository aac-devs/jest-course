const getData = require('../src/promise');
const API = 'https://pokeapi.co/api/v2/berry/cheri';

it('debería retornar la información de cheri', async () => {
  const response = await getData(API);
  expect(response.data.name).toBe('cheri');
});

it('debería fallar el test con una url inválida', async () => {
  expect.assertions(1);
  try {
    await getData('fdasdsg');
  } catch (error) {
    expect(error).not.toBeNull();
  }
});
