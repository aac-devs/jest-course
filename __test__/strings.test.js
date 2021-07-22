// toMatch()

describe('email validation', () => {
  test('this is an email', () => {
    const email = 'aac@mail.com';

    expect(email).toMatch(/\S+@\S+\.\S+/);
  });

  test('this is not an email', () => {
    const email = 'aacmail.com';

    expect(email).not.toMatch(/\S+@\S+\.\S+/);
  });
});
