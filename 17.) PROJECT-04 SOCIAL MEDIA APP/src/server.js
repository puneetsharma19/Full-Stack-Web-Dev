const express = require('express')

const { db } = require('./db/models')

const app = express()

db.sync({force:true}).then(()=>{
    app.listen(8383, ()=>{
        console.log('Server started at http://localhost:8383')
    })
}).catch((err)=>{
    console.log(new Error('Could not start database'))
    console.log(err)
})


