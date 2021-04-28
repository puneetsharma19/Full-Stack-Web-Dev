const express = require('express')

const srv = express()

srv.use('/public', express.static(__dirname+"/public"))

srv.listen(4567, ()=>{
    console.log("Server started at http://localhost:4567")
})