var express = require("express");
var router = express.Router();

const {ensureAuthenticated} = require('../javascript/authControl');

router.get("/",  ensureAuthenticated, function(req,res) {
	res.render("chat", {title: "Express" });
});

module.exports = router;
