/**
 * @param datas
 * @return total
 */
const arraySum = (datas = [1, 4, 1]) => {
    let total = 0

    datas.forEach((data) => {
        total += parseInt(data)
    })
    return total
}

module.exports = arraySum