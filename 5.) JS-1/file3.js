let mango = new Fruit('sweet','yellow');
let orange = new Fruit('sour','orange');
console.log(mango);
console.log(orange);

function Fruit(taste, color){
    this.color = color;
    this.taste = taste;
}




// let FruitExpression = class{
//     constructor(taste,color){
//         this.taste = taste
//         this.color = color
//     }
// }

// let kiwi2 = new FruitExpression('sour','green')
// console.log(kiwi2)




// class FruitClass{
//     constructor(taste,color){
//         this.taste = taste
//         this.color = color
//     }


// };

// let kiwi = new FruitClass('sour',"green")
// console.log(kiwi)


console.log(bird);
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

console.log(bird);