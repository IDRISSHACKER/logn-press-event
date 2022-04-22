const arraySum = require("../src/arraysum")


test('somme du tableau [1, 4, 1] = 6', () => {
    expect(arraySum([1, 4, 1])).toBe(6)
})