const {db, Student} = require('./create_models.js')

const task = async()=>{
    try{

        await db.sync({alter:true})
        //insert a student
        for(let i=0; i<10; i++){
            await Student.create({
                name: (['TOM', 'DICK', 'MARRY', 'RAM', 'SHYAM'])[parseInt(Math.random()*5)],
                age: 10 + parseInt(Math.random()*5)
            })
        }

    }catch(e){
        console.log(e)
    }
}

task()

