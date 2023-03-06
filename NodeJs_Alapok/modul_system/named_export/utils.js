
const even = arr => arr.filter(item => item % 2 === 0)
const odd = arr => arr.filter(item => item % 2 !== 0)

console.log('\n**************************Before*export*override****************************')
console.log(module)

module.exports = {even: even, odd}

console.log('****************************After*export*override****************************')
console.log(module)