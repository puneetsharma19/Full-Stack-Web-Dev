const mongoose = require('mongoose')
var Float = require('mongoose-float').loadType(mongoose)
const connection = mongoose.connect('mongodb://localhost:27017/ShopDB', {useNewUrlParser:true, useUnifiedTopology:true})

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
    cart:{ type : Array , "default" : [] },
    createdProducts:{ type : Array , "default" : [] },
    isAdmin: { type: Boolean, "default" : false}
})


const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    }, 
    cover_image:{
        type: String,
        required: true
    },
    images:{ type : Array , "default" : [] },
    description:{
        type:String,
        required:true
    },
    rating:{
        type: Float
    },
    discount :{
        type: Number,
        "default": 0
    },
    reviews: {
        type: Array, "deafult":[]
    },
    adminId:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Float,
        required:true
    },
    quantity:{
        type: Number,
        required:true
    }
})

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
module.exports = {User, Product, connection}