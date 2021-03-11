
let str = "qenwi"                               // 3 level from null          
let num = 223                                   // 3 level from null
let bool = true                                 // 3 level from null
let arr = [246,234,9,2840]                      // 3 level from null
let obj = {a:10, b:"wriuad"}                    // 2 level from null
let fun = function() {console.log('hello')}     // 3 level from null

// if x and y are not primitive,
//  and x == y comes out to be true <- what does that mean ?
//this means they are references to the same object in memory

console.log(typeof String) // > type of String comes out to be function
//String is a function String()


//all the below are functions
// these functions are special because they signify our data types
//
console.log('============ types ==================')
console.log('typeOf String', typeof String)
console.log('typeOf Boolean', typeof Boolean)
console.log('typeOf Number', typeof Number)
console.log('typeOf Array', typeof Array)
console.log('typeOf Object', typeof Object)
console.log('typeOf Function', typeof Function)


console.log('============= proto chain =============')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
console.log(fun.__proto__.__proto__ == obj.__proto__)


//Everything inherits directly from the same thing that obj is inherited from
// i.e in javascript, everything is essentially an object

console.log('================prototypes===============')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(arr.__proto__ == Array.prototype)
console.log(bool.__proto__ == Boolean.prototype)
console.log(num.__proto__ == Number.prototype)
console.log(fun.__proto__ == Function.prototype)

console.log(typeof Object.prototype)
// console.log(document.body.__proto__ == HTMLBodyElement.prototype)

//That means, String.protoype inherits from from Object.prototype

// typeof Object.create(Boolean.prototype) -> Object

console.log(str.charAt(4))
console.log(typeof str.charAt) // function since charAt is a function
let str2 = 'wkerpok'
console.log(str.charAt == str2.charAt) // true
//trying to redefine function
str.charAt = function() { return 'x' } // does not make any difference
// But to change it,
// If we do str.charAt it gives -> function charAt() 
// If we do str.__proto__.charAt gives  -> function charAt()
// again if we do str.__proto__.__proto__.charAt gives -> 'undefined'
// that means, charAt function exists in str.__proto__
// and we know that str.__proto__ == String.prototype
// That means, charAt function exists in String.prototype
// Now to change definition of charAt as we were trying to do in line 60, we have to change it in String.prototype
String.prototype.charAt = function() {return 'x'}

// now if we do console.log(str.charAt(2)) -> 'x'

// String.prototype contains all default string functions
// like charAt, indexOf, substring


