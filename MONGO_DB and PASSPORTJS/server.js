const express = require('express')
require('./models/db.js')
const app = express()

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./controllers/employeeController'))
app.listen(4509, ()=>{
    console.log("Server started on http://localhost:4509")
})