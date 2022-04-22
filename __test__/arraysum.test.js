const arraySum = require("../src/arraysum")


test('somme du tableau [1, 4, 1] = 6', () => {
    expect(arraySum([1, 4, 1])).toBe(6)
    expect(arraySum([0, 40, 200])).toBe(240)
    expect(arraySum([10, 40, 10])).toBe(60)
})