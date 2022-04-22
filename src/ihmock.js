const fact = require("./factorielle")

/**
 * @param {number} price
 * @returns {number}
 */
const ihmock = (price) => (price / 2) * fact(3)

module.exports = {
    ihmock
}