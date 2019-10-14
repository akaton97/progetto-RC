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
        callbackURL:'/auth/google/callback',
        proxy: true
        }, (accessToken, refreshToken, profile, done) => {

        const newUser = {
            email: profile.emails[0].value,
            googleID: profile.id,
            firstName: profile._json.given_name,
            lastName: profile._json.family_name,
            picture: profile.photos[0].value,
        }
        // Check for existing user
        User.findOne({
            email:profile.photos[0].value
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