function outer(arg1){
    let var1 = 10

    function inner(arg2){
        let var2 = 20
        console.log(arg1,var1,arg2,var2)
    }

    return inner
}

let x = outer('param1') //typeof x = 'function'
x('param2')



//IMPORTANT THINGS ABOUT JAVASCRIPT
/* 

 => CLOSURE SCOPE : Whenever a function is born, whatever the scopes were available at its birth place, 
                    are captured by the function and are available inside the function till the function
                    exists in memory.
                    => and it is infinitely nestable.


 =>Concept of shadow of variable : If there is a variable of same name outside the inner function,
                                   the variable is shadowed/overriden inside the inner function

*/



//this pointer in Javascript
/*
        >'this' points to the place where the function has been called
        > this can be called outside a function as well, and in that case, this points to Global scope
*/

function checkThis (){
    console.log(this) // here this points to the window because we have called the function through the window
}

let obj = {
    a: 10,
    b: 'asbad',
 // 10 : 'ajsk' to access this, we can write obj['10']; 10 will be reated as a string
 // it will give "ajsk" as output
 // for any member of class, we can access it either through '.' operator or obj['a']
 // obj['a'] will give output 10   
    c: true,
    d: function () {
        console.log(this) //here 'this' points to obj
    },
    e: {
        l:234,
        m: 'sdkjh',
        n: function(){
            console.log(this)
        }
    }
}

/* IMPORTANT NOTE : The 'this' pointer is binded on run time, i.e if in above case, if function d is called via obj, 
                    i.e obj.d will run console.log(this) and here this will point to obj, but,
                    if we do let z = obj.d and then do z(), it will print window because d is not called via
                    an object here and window is the current scope
*/







