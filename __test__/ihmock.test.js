const { ihmock } = require("../src/ihmock")

test('calcule en apliicant la regle ih', () => {
    expect(ihmock(200000)).toBe(600000)
})


