const express = require('express')

const { db } = require('./db/models')
const { usersRoute } = require('./routes/users')
const { postsRoute } = require('./routes/posts')

const app = express()

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))


db.sync().then(()=>{
    app.listen(8383, ()=>{
        console.log('Server started at http://localhost:8383')
    })
}).catch((err)=>{
    console.log(new Error('Could not start database'))
    console.log(err)
})


