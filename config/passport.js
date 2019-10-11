const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

//keys
const keys = require("./keys")

const User = mongoose.model('users');

module.exports = function(passport){  

    //access with google
    passport.use('google',
        new GoogleStrategy({
        clientID: keys.google_clientID,
        clientSecret: keys.google_clientSecret,
        callbackURL:'https://localhost:3000/login/google',
        proxy: true
        }, (accessToken, refreshToken, profile, done) => {

        const newUser = {
            googleID: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
        }
        console.log(newUser)
        // Check for existing user
        User.findOne({
            email:profile.emails[0].value
            }).then(user => {
            if(user){
            // Return user
            done(null, user);
            } else {
            // Create user
            new User(newUser)
                .save()
                .then(user => done(null, user));
                }
            })
        })
    )

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}