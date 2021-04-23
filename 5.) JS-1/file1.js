let a = 10;
console.log(a)

let b = [1,2,3,4,5]
console.log(b)

// variables, arrays, functions, loops, classes, objects

c = 20; //global variable without using let
var d = 30; // will have function scope
let e = 50; //will have block scope

function fun(){
    let a = 5;
    if(a===5){
        var f = 10; //let has a block scope and var has function scope
        console.log("inside",f);
    }
    console.log("outside",f) // this would give error if f was initialised using let
}

//function
function square_root(n){
    return Math.sqrt(n);
}

//arrays in js
let arr = ['apple','mango','guava']
console.log(arr)
console.log('arr[0] = ',arr[0])

for(let i=0; i<5; i++){
    console.log(arr[i])
}

//add elemets to array
arr.push("banana")
console.log(arr)
arr.pop()
console.log(arr)

arr.shift()
console.log(arr) // first element removed
arr.unshift("kiwi") //adds element to the front
console.log(arr)


//Object Oriented Programming in Javascript
//NOTE: Javascript  allows to create objects without defining the class

//One way of creating js object without using class
//this is called JSON (Javascript Object Notation)
var bird = {} ;// empty object
var bird = {
    x:10,
    y:20,
    color:'blue',
    eggs:['one','two','three','four'],

    //the below way of defining functions is called function expression
    //function expression mein variable mein store krte hai function ko aur declarartion mein seedha hi declare kar dete hai
    fly:function(){
        console.log('bird is flying',this.x,this.y); // to access variable of the class, this pointer is used
    }
};

bird.x = 120;
console.log(bird);

// for each loop
bird.eggs.forEach(function(val,idx){
    console.log(idx,val)
})




//More ways to creat Javascript objects

function Fruit(taste, color){
    this.color = color;
    this.taste = taste;
}

//new keyword
let mango = new Fruit('sweet','yellow');
let orange = new Fruit('sour','orange');
let seb = new Fruit('meetha','lal')


var apple = {
    taste:'sweet',
    color:'red'
};

console.log(mango)
console.log(orange)
console.log(apple)

//Another way to create JS object using 'class' keyword

//class declaration (would be hoisted but variable of class cannot be used before defining the variable)
class FruitClass{
    constructor(taste,color){
        this.taste = taste
        this.color = color
    }


};

let kiwi = new FruitClass('sour',"green")
console.log(kiwi)

//class expression -  this would not be hoisted
let FruitExpression = class{
    constructor(taste,color){
        this.taste = taste
        this.color = color
    }
}

let kiwi2 = new FruitExpression('sour','green')
console.log(kiwi2)