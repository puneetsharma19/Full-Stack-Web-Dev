const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(__dirname+'/Login-System'))
app.use('/api', require('./routes/api').route)

app.listen(3127, ()=>{
    console.log("Server started on http://localhost:3127")
})

