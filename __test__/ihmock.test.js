const { ihmock } = require("../src/ihmock")

test('calcule en apliicant la regle ih', () => {
    expect(ihmock(200)).toBe(600)
    expect(ihmock(10000)).toBe(30000)
    expect(ihmock(200000)).toBe(600000)
    expect(ihmock(600000)).toBe(1800000)
})


