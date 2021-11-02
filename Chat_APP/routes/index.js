const express = require('express')
const passport = require('passport')
const router = express.Router()
const User = require('../db/db.js').User
const connection = require('../db/db.js').connection
const genPassword = require('../config/validatePassword').genPassword
const isAuth = require('./authMiddleware').isAuth;
const isAdmin = require('./authMiddleware').isAdmin;
const path = require('path')
const upload = require('../handlers/multer')
const cloudinary = require('cloudinary')
require('../handlers/cloudinary')

router.post('/login', passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: '/' }));

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


 

 /**
 * -------------- GET ROUTES ----------------
 */

router.get('/', isAuth,(req, res, next) => {
    res.render('chat', {layout:'chatHome.handlebars', name:req.user.name, email:req.user.email})
});



router.get('/login', (req, res, next) => {
    res.render('login')
});


router.get('/register', (req, res, next) => {
    res.render('register')
});


// Visiting this route logs the user out
router.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/');
});



router.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});



module.exports = router;
