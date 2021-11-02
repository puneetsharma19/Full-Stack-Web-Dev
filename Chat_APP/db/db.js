const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://localhost:27017/ChatLoginDB', {useNewUrlParser:true, useUnifiedTopology:true})

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }, 
    email:{
        type: String,
        required:true
    }, 
    hash: { 
        type: String,
        required:true
    },
    salt: {
        type: String,
        required:true
    },
    imageUrl:{
        type:String
    }
})

const chatSchema = new mongoose.Schema({
    userEmail:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required:true
    },
    room:{
        type: String,
        required: true
    },
    message:{
        type:String,
        required: true
    }

})

const User = mongoose.model('User', userSchema)
const Chat = mongoose.model('chat', chatSchema)
module.exports = {User, Chat, connection}