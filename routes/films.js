var express = require("express");
var router = express.Router();
var request = require("request");
var app = express()

router.get('/', function(req,res) {
		res.render("films", {title: "Express"})
});

module.exports = router;
