// Matchers comunes:
// toBe()
// toEqual()

test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4);
});

test('object validation', () => {
  const data = { username: 'andresarana24' };
  const data2 = { username: 'andres' };

  expect(data).toEqual({ username: 'andresarana24' });
  expect(data).not.toEqual(data2);
});
