const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
var crypto = require('crypto');
const session = require('express-session')
const MongoStore = require('connect-mongo');
const cloudinary = require('cloudinary')
const path = require('path')

const connection = require('./db/db.js').connection
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


app.listen(4001, ()=>{
    console.log('Server started on http://localhost:4001')
})