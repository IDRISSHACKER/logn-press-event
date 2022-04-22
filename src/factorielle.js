/**
 * @param {number} nb
 * @returns {number}
 */
const fact = (nb) => {
    if (nb <= 0)
        return 1

    return nb * fact(nb - 1)
}

module.exports = fact;
