const express = require('express')
const router = express.Router()
const Employee = require('../models/employee')


router.get('/', (req,res)=>{
    res.render('form',{title:'FORM'})
})

router.post('/', async(req,res)=>{

    try{
    var emp = {
        name: req.body.name,
        email: req.body.email,
    }
    await Employee.create(emp)
    res.redirect('/list')
    }catch(e){
        console.log(e)
    }

})

router.get('/list', async(req,res)=>{
    try{
        const employees = await Employee.find()
        const arr = []
        employees.forEach((item)=>{
            arr.push({
                name:item.name,
                email: item.email
            })
        })
        res.render('employeeList', {l:arr})
    }catch(e){
        console.log("Could not retrieve employees from database")
        console.log(e)
    }
    // res.send('Here will be the employee list shown')
})

module.exports = router