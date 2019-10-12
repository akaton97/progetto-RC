var express = require("express");
var router = express.Router();
const passport = require('passport');

//log-in routes
router.get('/login', (req,res) =>{
  res.render('login');
});

//log-out routes
router.get('/logout', (req,res) =>{
  res.send('logout');
  req.logout();
  req.flash('success_msg', 'Logged out')
  res.redirect('/login');
});

//GOOGLE authentication
router.get('/google', passport.authenticate('google', 
  {
    scope: ['profile', 'email']
  })
  
);

//return from authenticate
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect : '/homepage',
    failureRedirect: '/login'
    })
  );

module.exports = router;