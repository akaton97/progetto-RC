const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
//keys
const google_clientID = "620881066128-o3mjoegv64viebt4s5liiqv2j90foa3p.apps.googleusercontent.com"
const google_clientSecret = "Ng5qK3AXu0MFFzHbiqWSTbwp";

const User = mongoose.model('users');

module.exports = function(passport){    
    //access with google
    passport.use('google',
        new GoogleStrategy({
        clientID: google_clientID,
        clientSecret: google_clientSecret,
        callbackURL:'/auth/google/callback',
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