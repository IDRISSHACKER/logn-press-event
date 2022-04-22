const fact = require('../src/factorielle');

test('factorielle de 0 = 1', () => {
    expect(fact(0)).toBe(1);
    expect(fact(3)).toBe(6);
});
