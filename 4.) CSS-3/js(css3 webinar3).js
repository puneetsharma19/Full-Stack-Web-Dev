// Data types in JS

console.log(33,typeof 33)
console.log(typeof 234.465)
console.log(typeof 'a')
console.log(typeof 'awqd')
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)

// functions in JAVASCRIPT

function a (){
    return 1
}

// in javascript we can treat functions as variables
console.log(a, typeof a)
console.log(a(), typeof a())



//more about functions
console.log(beta()) // works perfectly fine before defining the function
// js works in a two pass way, that is the js interpreter stores the function definitions inside the memory 

/* HOISTING:
    when the javascript interpreter executes this page, it will take all the function definitions 
    and place them at the top of the page so that the functions are already defined before they are called.
    Inside the debugger we will see no changes in the code, but that is what the  js interpreter does
*/


// But for the below case:
    //ERROR !
// let gamma = function(){
//     return "C"
// }
// NOTE : for a variable to be used (any type of variable), it needs to be declared first before getting used


function alpha(){
    return "A"
}

function beta(){
    return "B"
}

// Polymorphism in JS eg:
// here polymorphism does not works like in java and c++ that is by defining more than one function definitions
// because writing 2 defintions of functions will override previous.

function area(height, width){ // no need to specify data types here
    return height*width
}

console.log('area(3,4) = ', area(3,4))

/* NOTE : if we write area(4) output :- NaN. I f we do not pass all the arguments, the unpassed arguments
          become undefined. */

/* now if we write function as : 

    function area(height, width){ 
        if(typeof width === undefined){
            return Math.PI*height*height
        }
        return height*width
    }

// NOTE : false, 0, null and undefined also act as undefined inside an if case so we can write,
    if(!width){
        return Math.PI*height*height
    }
*/

// PASSING MORE PARAMETERS TO FUNCTION THAN DEFINED :
function hello(){
    console.log('hello ' + arguments[0] + arguments[1]);
}

hello('Puneet','Sharma')


// if we set arguments inside the function : 
function hello2(){
    let arguments = 'abcderf' //this overrides the definition of arguments
    console.log('hello2 ' + arguments[0] + arguments[1]);
}

hello2()
//it prints first 2 charcters of the string as it is now treated as arguments


//HIGHER ORDER FUNCTIONS:
/*
    If a language allows to pass functions as arguments or allows functions to return functions,
    then such a language supports HIGHER ORDER FUNCTIONS.

*/

function createGreeter(greeting){

    function greet(name){
        console.log(greeting,name())
    }

    return greet
}

function getname(){
    return document.getElementById('namebox').value
}

let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')
