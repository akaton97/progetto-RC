var express = require("express");
var router = express.Router();

router.get('/', function(req,res) {
		res.render("search_TV", {title: "Express"})
});

module.exports = router;
