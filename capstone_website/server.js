const express = require('express')
const path = require('path')

const app = express()

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.render('home')
})

app.post('/predictions', (req,res)=>{
    console.log(req.body)
    const obj = req.body
    res.render('predictions',{obj})
})

app.listen(4002, ()=>{
    console.log('Server started on http://localhost:4002')
})