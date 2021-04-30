const Sequelize = require('sequelize')
//Sequelize is a class that is why 'S' of sequelize starts from capital letters
const db = new Sequelize({
    dialect:'mysql',
    database: 'sampledb2',
    username: 'sampleuser22',
    password : 'samplepass22'
})

//In sequelize, analogus to OOPS concept of classes and objects, we have Models(as classes) and Entity(as object)
// rows of table(relation) are basically objects

//to make models (Tasks is my model)
//This Tasks is bascially the javascript representation of table preset in the database
//'task' passed as parameter is basically the name of the table
const Tasks = db.define('task',{
    //here we define columns
    id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: Sequelize.DataTypes.STRING(140),
        alowNull: false
    },
    done:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }

})

//db.authenticate() // this db.authenicate checks whether or not are we able to make connection with database;
//output of above query is SELECT 1+1 AS result

//Operations of db are asynchronus (of promises) so we can call it using async await
async function task(){
    //basically the below line is equivalent to create table if not exists query in sql
    await db.sync()
    //to insert into table values, we write tasks.create()
    await Tasks.create({
        title: 'Some task to be done'
    })
    //to insert multiple values int table we can also use bulkCreate()
    await Tasks.bulkCreate([
        {title:'Task1'},
        {title:'Task2'},
        {title:'Task3'}
    ])

    const tasks = await Tasks.findAll();
    tasks.forEach((t)=>{
        console.log(`${t.id} \t ${t.done} \t ${t.title}`)
    })
}
task()