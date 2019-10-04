var express = require("express");
var router = express.Router();
var request = require("request");

router.get('/', function(req,res) {
		res.render("home_film", {title: "Express"})
});

router.post("/", function(req, res) {  //searchbar
  let name = req.body.nomeFilm ;
  let url = "https://api.themoviedb.org/3/search/movie?api_key=807244b48f548385eab5d123309248e6&language=it&query="+
	name +"&include_adult=false";
  request(url, function(err, response, body) {
    if (err) {
      res.render("home_film", alert("pio"));
    }
    else {
      let fileJson = JSON.parse(body);
      res.render("search_film", { jsonfile: fileJson});
    }
  });
});

module.exports = router;
