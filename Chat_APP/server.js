const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
var crypto = require('crypto');
const path = require('path')

const connection = require('./db/db.js').connection
const Chat = require('./db/db.js').Chat
const session = require('express-session')
const MongoStore = require('connect-mongo');
const isAuth = require('./routes/authMiddleware').isAuth

require('dotenv').config();


const app = express()

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// const sessionStore = new MongoStore('session',{ mongooseConnection: connection, collection: 'sessions' });

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI  //(URI FROM.env file)
      }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}));

require('./config/passport.js')
app.use(passport.initialize());
app.use(passport.session());




app.use(require('./routes/index'))

////////////////////////////////////////////////////chat app content here//////////////////////////////////////////
const http = require('http') //importing http library

const socketio = require('socket.io')

const server = http.createServer(app)
const io = socketio(server)

const users = {}

io.on('connection', socket =>{
    socket.on('new-user-joined', userObj=>{
        console.log("new user at server=",userObj)
        users[socket.id] = userObj;
        console.log("users at server = ",users)
        console.log("users[socket.id].username = ",users[socket.id].username)
        socket.broadcast.emit('user-joined', users[socket.id].username);
    })

    socket.on('joinEvent', async(room)=>{
        try{
            const messages = await Chat.find({room:room}).lean()
            socket.join(room)
            socket.emit("render-old-msgs",messages)
        }catch(e){
            console.log(e)
        }
        
    })

    socket.on('sendToRoom', ({room,message,userEmail,username})=>{
        //store this message in db before sending
        const newChat = new Chat({
            room:room,
            message:message,
            userEmail:userEmail,
            username:username
        })
        newChat.save()
        
        socket.to(room).emit("receiveInRoom",{msg:message, name:username, room:room})
        
    })

    // socket.on('send', message=>{
    //     socket.broadcast.emit('receive', {msg: message, naam: users[socket.id].username})
    // })

    socket.on('disconnect', ()=>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id]
    })

    socket.on('sendImage', message=>{
        socket.broadcast.emit('receiveImage', {msg: message, naam: users[socket.id].username})
    })

})



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


server.listen(3001, ()=>{
    console.log('Server started on http://192.168.43.224:3001')
})