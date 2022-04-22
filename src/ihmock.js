const fact = require("./factorielle")

const ihmock = (price) => {
    const moker = (price / 2) * fact(3)
    return moker
}

module.exports = {
    ihmock
}