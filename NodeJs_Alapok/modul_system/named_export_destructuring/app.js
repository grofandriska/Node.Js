
// changed into OBJ && imports module -> js OBJ only once 
console.log('\n**app.js**')
const {even} = require('./utils')
const {odd} = require('./utils')

console.log('utils object',even);
console.log('odd object',odd);

const numberList = [345,88,978,21,5,0,-3,-4,7,9,11,12]

console.log('számok',numberList + '\n')

console.log('páratlan',odd(numberList) + '\n')
console.log('páros',even(numberList) + '\n')

console.log('\n**end of app.js**')
