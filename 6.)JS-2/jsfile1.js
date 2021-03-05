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


