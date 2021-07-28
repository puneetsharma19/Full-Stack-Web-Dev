const route = require('express').Router()

route.get('/', (req,res)=>{
    res.render('home',{layout:'main'})
})

route.get('/blogs', (req,res)=>{
    res.render('blogs',{layout:'backend'})
})

route.get('/testing', (req,res)=>{
    res.render('test',{layout:'other'})
})

module.exports = route