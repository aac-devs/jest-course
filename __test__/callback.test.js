const fetchAPI = require('../src/callback');

it('should return the goku info', (done) => {
  const API = 'https://pokeapi.co/api/v2/berry/cheri/';

  function callback(err, data) {
    try {
      expect(err).toBeNull();
      expect(data).not.toBeNull();
      expect(data.name).toBe('cheri');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchAPI(API, callback);
});
