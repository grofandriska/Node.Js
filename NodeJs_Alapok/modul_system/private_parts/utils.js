const { it } = require("node:test")

const even = arr => arr.filter(item => item % 2 === 0)
const odd = arr => arr.filter(item => item % 2 !== 0)

const generateRandom = (to) => Math.floor(Math.random() * to) + 1

const multipyByRandom = (arr,to) => arr.map(item => item * generateRandom(to))

console.log('\n**************************Before*export*override****************************')
console.log(module)

// generate random is Encapsulated
module.exports = {even: even, odd,multipyByRandom}

console.log('****************************After*export*override****************************')
console.log(module)