
// CLASSES IN JAVASCRIPT
// classes are 'synatctical sugar' means that originally they are prototype based but are just an easy way for humans to deal with
// classes are not a new thing, just a feature at syntactical level

class Person {

    constructor(name,age){
        this.name = name
        this.age = age
    }

    isAdult(){
        return this.age >=18
    }
}

let p = new Person('Puneet',21)
console.log(typeof Person) //-> function; there is no new datatype called class
console.log(p.__proto__ == Person.prototype) // true
console.log(p.__proto__.__proto__ == Object.prototype) // true

let p2 = new Person('eqwjmfj',10)



//Inheritance in classes

class Student extends Person{

    constructor(name,age,grade){
        super(name,age)
        this.grade = grade
    }
}

let s1 = new Student('Harry Potter',13,5)
let s2 = new Student('fwsfegerg',14,6)

console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)

//inheritance chain Object.prototype -> Person.prototype -> Student.prototype

//no inheritance between the classes (actually they are functions)
//Object -x -> Person -x -> Student