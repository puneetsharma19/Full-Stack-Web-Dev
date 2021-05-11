const route = require('express').Router()
const User = require('../../db').User

route.get('/', (req,res)=>{
    res.sendFile(__dirname+'/register.html')
})

route.post('/', (req,res)=>{

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        console.log(req.body)
        res.status(501).send({
            error: "Could not add new user"
        })
    })

})


exports = module.exports = route