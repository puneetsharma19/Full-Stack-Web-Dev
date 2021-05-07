const http = require('http') //importing http library
const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

io.on('connection',(socket)=>{
    console.log('Connected with socket id = ',socket.id)
})

app.use('/',express.static(__dirname+'/public'))

server.listen(3344, ()=>{
     console.log('Server started on http://localhost:3344')
})



//Socket cannot run directly on express app, we need a http server for that


