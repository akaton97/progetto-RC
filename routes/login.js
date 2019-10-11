var express = require("express");
var router = express.Router();
const passport = require('passport');

//log-in routes
router.get('/', (req,res) =>{
  res.render('login');
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

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'Logged out')
  res.redirect('/auth/login');
});

module.exports = router;