var express = require('express');
var router = express.Router();
var passport = require('passport')
router.get("/", function(req,res){
  res.render("homepage", {title: "Express"})
})

//GOOGLE authentication
router.get('/homepage', passport.authenticate('google', {scope: ['profile', 'email']}));

//return from authenticate
router.get('/homepage/callback',
  passport.authenticate('google', {
    successRedirect : '/homepage',
    failureRedirect: '/homepage'
    })
  );

module.exports = router;


