const express = require('express')
const app = express()

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/', require('./routes/home'))

app.listen(3899, ()=>{
    console.log("Server started at http://localhost:3899")
})