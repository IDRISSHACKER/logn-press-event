/**
 * @param {number} nb
 * @returns {number}
 */
const fact = (nb) => {
    let result;

    if (nb <= 0) {
        result = 1;
        return result
    }

    result = nb * fact(nb - 1);

    return result

}

module.exports = fact;
