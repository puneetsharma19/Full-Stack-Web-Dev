//OBJECT INHERITANCE IN JS
//objects can be created without classes in javascript
//object to object direct inheritance exists in javascript



// concept :- equality
/*
    console.log(1 == '1') -> prints true
    console.log( 1 ===  '1') -> false

    >    check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_samenesson mdn;   <
    
    > (==) it is called ABSTRACT EQUALITY COMPARISON -> checks value on both sides only
            -> if LHS is a number, it converts RHS to a number and then compares LHS, RHS
    > (===) it is called STRICT EQUALITY COMPARISON -> checks for both value and data types on both sides


    *> peculiar cases:
        i) console.log(0 == '') -> TRUE, because '' when converted to number in js using Number(''), it gives 0
        ii) console.log('false' == false ) -> FALSE check - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
        iii) console.log('0' == false) -> TRUE - same reason as that of above case
        iv) NOTE: '\n', '\t' and ' ' == 0; but '\n' == '\t' -> false because in this both are typecasted to
                    strings

        ** THEREFORE, transitive property that is a=b b=c then c=a does not hold true for
                        abstract equality comparison
        v) console.log([1,2] == [1,2]) -> FALSE

        NOTE: In v) case the references are checked >let arr = [1,2]
                                                     let arr2 = arr
                                                     console.log(arr == arr2) -> true
                                                    
                                                     >but for:  let arr = [1,2]
                                                                let arr3 = [1,2]
                                                                console.log(arr == arr3) -> false

*/


// back to object inheritance
let obj1 = {
    a:10,
    b:20,
    c:30
}

let obj2 = Object.create(obj1) // this is called prototype based inheritance
// obj1 == obj2 -> false

/*obj2.__proto__  -> this is used only for debugging
    NOTE : obj.__proto__ == obj1 -> true this means obj2.__proto__ is actually obj1
    
    
    obj2.a -> it will try to find a in obj2
        -> if not found,
        -> it will try to find it in obj2.__proto__
        -> if not found, 
        -> it will try to find in obj2.__proto__.proto__
        -> till .__proto__ becomes null

*/

obj2.p = 'wdjo'
obj2.q = 'ibfwh'
obj2.r = 'wfhiw'

let obj3 = Object.create(obj2)
//obj3.__proto__ == obj2
//obj3.__proto__.__proto__ == obj1