var express = require("express");
var router = express.Router();

router.get('/', function(req,res) {
		res.render("search_film", {user: req.user});
});

module.exports = router;
