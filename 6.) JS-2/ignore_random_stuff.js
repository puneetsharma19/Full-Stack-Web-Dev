function Person(name,age){
    this.name = name
    this.age = age
}

let p = new Person('Harry',20)
console.log(p)

class Man{
    constructor(name,age){
        this.name = name
        this.age = age
    }
}

let m = new Man('Harry Potter',20)
class Student extends Man{

}

let s = new Student()
console.log(s)
s.name = 'Puneet'
s.age = 21
console.log(s)

