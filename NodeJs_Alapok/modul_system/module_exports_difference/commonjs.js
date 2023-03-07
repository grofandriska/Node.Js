console.log('\n***************************start**********************'+'\n')

let MODULE_EXPORTS = {}

const REQUIRE = () => MODULE_EXPORTS

const even = arr => arr.filter(item => item % 2 === 0)

/*

MODULE_EXPORTS = even


so we use it as property not reasign value like above
*/
MODULE_EXPORTS.even = even

console.log('module',MODULE_EXPORTS)
console.log('require',REQUIRE())

let EXPORTS = MODULE_EXPORTS

console.log('exports',EXPORTS)

const pi = 3.14

// Exports = pi -> its not refers to module 

EXPORTS.pi = pi
EXPORTS.piplus3 = pi+3

console.log('\n*******************new exports********************','\n')
console.log('module',MODULE_EXPORTS)
console.log('require',REQUIRE())
console.log('exports',EXPORTS,'\n')