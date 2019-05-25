var express = require("express");
var router = express.Router();
var request = require("request");

router.get('/', function(req,res) {
		res.render("films", {title: "Express"})
});
router.post("/", function(req, res) {
  let id = req.body.name;
  let url = "https://api.themoviedb.org/3/movie/"+
	id	+"?api_key=807244b48f548385eab5d123309248e6&language=en-US";
  request(url, function(err, response, body) {
    if (err) {
      res.render("films", alert("pio"));
    }
    else {
      let fileJson = JSON.parse(body);
      res.render("risultato", { jsonfile: filmo});
    }
  });
});
module.exports = router;
