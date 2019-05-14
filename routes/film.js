var express = require("express");
const MovieDB = require('moviedb')('807244b48f548385eab5d123309248e6');
var router = express.Router();

router.get('/', function(req,res) {
	res.render('film', {title: 'Express'});
	MovieDB.movieInfo({ id: 666}, (err, res) => {
		if(err) {console.log('err')}
		console.log(res);
		var s = res;
		
		
	  });
});

module.exports = router;
