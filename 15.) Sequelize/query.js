const {db, Student} = require('./create_models.js')

async function task(){

    try{
        await db.sync()
        // const students = await Student.findAll();
        // students.forEach(s => console.log(
        //     `name: ${s.dataValues.name}\t age: ${s.dataValues.age}`
        //     ))

        console.log("Students whose age is greater than 12")

        const q1 = await Student.findAll({
            where : {age: {$gt:
                12}}
        })

        q1.forEach(s => console.log(
            `name: ${s.dataValues.name}\t age: ${s.dataValues.age}`
            ))
    }
    catch{
        if(e)
            console.log(e)
    }
}

task()