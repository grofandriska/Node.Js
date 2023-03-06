const even = arr => arr.filter(item => item % 2 === 0)
console.log('*****************Before*export*override****************************')
console.log(module)

module.exports = even

console.log('*****************After*export*override****************************')
console.log(module)