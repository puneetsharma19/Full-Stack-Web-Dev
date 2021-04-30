const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(5678, ()=>{
    console.log('Server started on http://localhost:5678')
})

