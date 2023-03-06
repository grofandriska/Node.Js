
const utils = require('./utils')
console.log(utils);

const numberList = [345,88,978,21,5,0,-3,-4,7,9,11,12]

console.log('számok',numberList)

console.log('páratlan',utils.odd(numberList))
console.log('páros',utils.even(numberList))
