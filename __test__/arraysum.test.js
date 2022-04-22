const arraySum = require("../src/arraysum")


test('somme du tableau [1, 4, 1] = 6', () => {
    expect(arraySum([1, 4, 1])).toBe(6)
    expect(arraySum([0, 40, 200])).toBe(240)
    expect(arraySum([10, 40, 10])).toBe(60)
    expect(arraySum([1, 4, 1, 30, 200, 0, 20, 99, 8888888, 99999999999999999999n, 8483829282828, 338383929384288, 9493949932932938488n, 4949929329])).toBe(109494296805650430000)
})