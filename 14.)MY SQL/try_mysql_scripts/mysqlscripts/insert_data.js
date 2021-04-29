const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

const insert = {
    name:process.argv[2],
    age:parseInt(process.argv[3]),
    city:process.argv[4]
}


connection.query(
    `INSERT INTO persons (name, age, city) VALUES(
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    function(err, results){
        if(err){
            console.error(err)
        }else{
            console.log("Inserted successfully")
            console.log(results)
        }
        connection.close()
    }
)