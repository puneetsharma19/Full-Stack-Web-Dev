const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true,  useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to database successfully')
})
.catch((err)=>{
    console.log(err)
});

