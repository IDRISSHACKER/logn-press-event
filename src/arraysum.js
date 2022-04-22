/**
 * @param {array} datas
 * @returns {number}
 */
const arraySum = (datas = [1, 4, 1]) => {
    let total = 0

    datas.forEach((data) => {
        total += parseInt(data)
    })
    return total
}

module.exports = arraySum