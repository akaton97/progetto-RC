var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req,res) {
	let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=807244b48f548385eab5d123309248e6&language=it';
	request(url,function(err,resp,body){
		if(err) console.log("err");
		else{
			var fileJson = JSON.parse(body);
			console.log(fileJson)
			res.render("generi", {jf: fileJson})
		}
	})
});

module.exports = router;
