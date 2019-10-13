var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/:id?', function(req,res) {
			let id = req.params.id.substring(1);
			console.log(id)
			let url = "https://api.themoviedb.org/3/tv/"+
			id	+"?api_key=807244b48f548385eab5d123309248e6&language=it-IT";
			request(url, function(err, response, body) {
				if (err) {
					res.render("home_tvshow", alert("pio"));
				}
				else {
					let fileJson = JSON.parse(body);
					console.log(fileJson)
					res.render("risultato_TV", { filmo: fileJson});
				}
			});
});

module.exports = router;
