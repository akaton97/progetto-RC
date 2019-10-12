var express = require('express');
var router = express.Router();

const {ensureAuthenticated} = require('../public/javascript/authControl');

router.get("/", function(req,res){
  res.render("homepage", {user: req.user});
})

module.exports = router;


