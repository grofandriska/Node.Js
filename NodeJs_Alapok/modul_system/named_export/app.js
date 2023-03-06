
const utils = require('./utils')

console.log('utils object',utils);

const numberList = [345,88,978,21,5,0,-3,-4,7,9,11,12]

console.log('számok',numberList + '\n')

console.log('páratlan',utils.odd(numberList) + '\n')
console.log('páros',utils.even(numberList) + '\n')
