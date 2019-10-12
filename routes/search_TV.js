var express = require("express");
var router = express.Router();

const {ensureAuthenticated} = require('../public/javascript/authControl');

router.get('/', function(req,res) {
		res.render("search_TV", {user: req.user});
});

module.exports = router;
