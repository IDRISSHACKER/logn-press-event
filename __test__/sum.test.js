const sum = require('../src/sum');

test('additionnement 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(13, 10)).toBe(23);
    expect(sum(10, 20)).toBe(30);
})
