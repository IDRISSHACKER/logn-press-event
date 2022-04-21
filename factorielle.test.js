const fact = require('./factorielle');

test('factorielle de 0 = 1', () => {
    expect(fact(0)).toBe(1);
});
