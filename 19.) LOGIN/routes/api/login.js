const route = require('express').Router()
const User = require('../../db').User

route.get('/', (req,res)=>{
    res.sendFile(__dirname+'/login.html')
})



exports = module.exports = route