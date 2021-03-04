let p = 'puneet'

let str ="this is ${p}'s string"
console.log(str)

//if we write string using single '', then we miss some characters like arnav's
//so to avoid this we use  arnav\'s

//OR we can use bacticks : `` these are bacticks
// backticks `` are used to creat templates , for eg:-
let s = `this is ${p} `
console.log(s)

//using line breaks for long strings for eg:
let longstr = 'this is\
a very long\
 string'
console.log(longstr)
// writing a forward slash means that the string written in the next line should not appear in next line rather it should come in continuation


//string length
console.log(str.length)

//searching strings 
let st = 'this has some data here'
let key = 'has'

console.log(st.indexOf(key))
let k = 'have'
console.log(st.indexOf(k)) //-1 since have is not present
// if index == -1 then the key is not contained in the string else it is present

str = 'this is an easy job'
console.log(str.indexOf('is',3)) // second argument means from where it needs to search next
// in above eg, the first index of 'is' will be 2

str = 'ab aab abbcd ba aab'
console.log(str.lastIndexOf('ab'))


//String Methods

let mainstr = 'this is a long string'
let smallstr = mainstr.slice(2,3)
console.log(smallstr)

//substring method
smallstr = mainstr.substring(7,10)
console.log(smallstr)

//substring and slice do the same thing but there is a small difference: -ve indices work in slice
smallstr = mainstr.slice(-6,-4)
console.log(smallstr)

//substr : first argument is index and 2nd index is length from that index
smallstr = mainstr.substr(3,4)
console.log(smallstr)

//substr works for negative numbers as well
smallstr =  mainstr.substr(-6,4)
console.log(smallstr)


//ARRAYS
let arr = [1,2,4]
console.log(arr)
console.log('length of arr = ',arr.length)

let arr2 = [1,'hello',false,[2,3]]
console.log(arr2)

//for of loop
for(let val of arr2){
    console.log(val)
}

//for in loop
for(let index in arr2){
    console.log(arr2[index])
}

//add remove items in array
let fruits = ['apple', 'mango']
console.log(fruits)

//push and pop
fruits.push('melon')
console.log(fruits)
fruits.pop()
console.log(fruits)

//add to start of array and remove from front
fruits.shift()
console.log(fruits)
fruits.unshift('kiwi', 'grapes') //multiple items can be unshifted 
console.log(fruits)

fruits.push('apple','banana')
console.log(fruits)



//Changing data in array ARRAY- III
//arrays- slice, splice and concat

let notes = ['do','re','mi','fa','so','la','ti','do']
console.log(notes)
console.log(notes.slice(2)) // slice of array starting from 2 index
console.log(notes.slice(4,6))

//splice
notes.slice(4,6)
console.log(notes) // array has remained intact after slicing

let omit = notes.splice(4)
console.log(notes) // using splice original array has been changed
console.log(omit) // removed part has been stored in omit variable i.e, splice returns the removed part

notes = ['do','re','mi','fa','so','la','ti','do']
let omit2 = notes.splice(4,2)
//here first argument is the index and 2nd argument is the length to be removed
console.log(omit2)
console.log(notes)

//splice - part2
notes = ['do','re','mi','fa','so','la','ti','do']
notes.splice(0,3,'sa','re','ga')
console.log(notes)



//CONCAT (concat is also non destructive in nature means does not changes the array)
notes = ['do','re','mi']
console.log(notes.concat('sa'))
console.log(notes) //'sa' will not be present here

//more than one arguments can be used in concat
console.log(notes.concat('sa','re','ga'))
console.log(notes.concat(['sa','re','ga']))






