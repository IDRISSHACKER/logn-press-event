const fact = require("./factorielle")

/**
 * @param {number} price
 * @returns {number}
 */
const ihmock = (price) => {
    const moker = (price / 2) * fact(3)
    return moker
}

module.exports = {
    ihmock
}