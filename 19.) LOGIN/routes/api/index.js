const route = require('express').Router()

route.use('/register', require('./register.js'))
route.use('/login', require('./login.js'))

exports = module.exports = {
    route
}