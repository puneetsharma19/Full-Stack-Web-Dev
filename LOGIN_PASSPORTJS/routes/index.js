const express = require('express')
const passport = require('passport')
const path = require('path')
const upload = require('../handlers/multer')
const cloudinary = require('cloudinary')
const Razorpay = require('razorpay')
require('../handlers/cloudinary')

const router = express.Router()
const User = require('../db/db.js').User
const Product = require('../db/db.js').Product
const connection = require('../db/db.js').connection
const genPassword = require('../config/validatePassword').genPassword
const isAuth = require('./authMiddleware').isAuth;
const isAdmin = require('./authMiddleware').isAdmin;


router.post('/login', passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: '/' }));
router.post('/adminLogin', passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: '/adminDashboard' }));

 router.post('/register', (req, res, next) => {
    const saltHash = genPassword(req.body.pw);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        hash: hash,
        salt: salt,
    });

    newUser.save()
        .then((user) => {
            console.log(user);
        });

    res.redirect('/login');
 });

 router.post('/adminRegister', (req, res, next) => {

    if(req.body.adminSecret !== process.env.ADMIN_SECRET)
    {
        res.redirect('/adminRegister')
    }

    else{
        const saltHash = genPassword(req.body.pw);

        const salt = saltHash.salt;
        const hash = saltHash.hash;

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            isAdmin: true,
            hash: hash,
            salt: salt,
        });

        newUser.save()
            .then((user) => {
                console.log(user);
            });

        res.redirect('/adminLogin');
    }
 });


 router.post('/createProduct', upload.single("image"), async(req,res)=>{
    const result = await cloudinary.v2.uploader.upload(req.file.path)
    const newProduct = new Product({
        title: req.body.title,
        cover_image: result.secure_url,
        description: "This is a sample product",
        adminId: req.user.id,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    })
    newProduct.save()
        .then(()=>console.log('Product added successfully'))
    res.redirect('/adminDashBoard')
 })


router.post('/dashboard', isAuth, async(req,res)=>{
   
    // console.log(req.body.productId)
    User.findOneAndUpdate(
        { _id: req.user.id }, 
        { $push: { cart: req.body.productId } },
       function (error, success) {
             if (error) {
                 console.log(error);
             } else {
                 console.log(success);
             }
         });
     
    res.redirect('/')
})

 /**
 * -------------- GET ROUTES ----------------
 */
router.get('/myCart', isAuth, async(req,res)=>{

    const myProducts = await Product.find({_id:{$in:req.user.cart}}).lean()
    res.render('myCart', {myProducts})
})


router.get('/', isAuth, async(req, res, next) => {
    const products = await Product.find({}).lean()
    if(req.user.isAdmin)
        res.render('adminDashboard')
    else
        res.render('dashboard',{name: req.user.name, products})
});

router.get('/myCreatedProducts', async(req,res)=>{
    console.log(req.user.id)
    const myProducts = await Product.find({adminId:req.user.id}).lean()
    console.log('Admin requesting his createdProducts=>')
    console.log(myProducts)
    res.render('myCreatedProducts',{myProducts})
})

router.get('/register', (req, res, next) => {
    res.render('register')
});
router.get('/adminRegister', (req, res, next) => {
    res.render('adminRegister')
});

// When you visit http://localhost:3000/login, you will see "Login Page"
router.get('/login', (req, res, next) => {
    res.render('login')
});

router.get('/adminLogin', (req, res, next) => {
    res.render('adminLogin')
});



router.get('/protected-route', isAuth, (req, res, next) => {
    console.log(req.user.name)
    res.render('dashboard',{name: req.user.name})
});

router.get('/adminDashboard', isAdmin, (req, res, next) => {
    res.render('adminDashboard')
});


// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});

router.get('/login-success', (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
});

router.get('/login-failure', (req, res, next) => {
    console.log(req.user)
    res.send('You entered the wrong password.');
});

///////////////////////////////razorpay payment gateway integration////////////////////////////////

router.post('/startPayment',(req,res)=>{
    res.render('payment',{productId:req.body.productId})
})

router.post('/pay', async(req,res)=>{
    
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })
    const product = await Product.find({_id:req.body.productId}).lean()

    console.log('product price = ', product[0].price)
    var options = {
        amount: product[0].price*100*1, 
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.json(order)
      });
      
})

////////////////////////////////////////////////RAZORPAY///////////////////////////////////////////



module.exports = router;
