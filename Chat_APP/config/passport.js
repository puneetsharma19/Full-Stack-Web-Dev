const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../db/db.js').User
const validPassword = require('./validatePassword').validPassword

const customFields = {
    usernameField:'email',
    passwordField:'pw'
}

const verifyCallBack = (username, password, done)=>{

    User.findOne({email:username})
        .then((user)=>{
            if(!user)
                return done(null,false)
            const isValid = validPassword(password,user.hash, user.salt)
            if(isValid)
                return done(null,user)
            else return done(null,false)
        })
        .catch((e)=>{
            done(e)
        })

}

const strategy = new LocalStrategy(customFields,verifyCallBack)

passport.use(strategy)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});