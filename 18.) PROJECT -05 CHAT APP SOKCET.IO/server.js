const http = require('http') //importing http library
const express = require('express')
const app = express()
const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

const users = {}

io.on('connection', socket =>{
    socket.on('new-user-joined', name=>{
        console.log(name)
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    })

    socket.on('send', message=>{
        socket.broadcast.emit('receive', {msg: message, naam: users[socket.id]})
    })

    socket.on('disconnect', ()=>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id]
    })
    

})

app.use('/',express.static(__dirname+'/public'))

server.listen(3344, ()=>{
     console.log('Server started on http://192.168.43.224:3344')
})



//Socket cannot run directly on express app, we need a http server for that


