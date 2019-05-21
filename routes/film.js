var express = require("express");
var router = express.Router();
var request = require("request");

router.get('/', function(req,res) {
	let url = 'https://api.themoviedb.org/3/movie/5?api_key=807244b48f548385eab5d123309248e6&language=it&append_to_response=hello';
  request(url, function(err,resp,body){
    if(err) console.log("err");
    else{
		var fileJson = JSON.parse(body);
		res.render("film", {jsonfile: fileJson})

    }
  })
});

router.post("/risultati", function(req, res) {
  let name = req.body.name_field;
  let url = "https://api.themoviedb.org/3/search/movie?api_key=807244b48f548385eab5d123309248e6&language=en-US&query=" +
	+ name + "&include_adult=false";
  request(url, function(err, response, body) {
    if (err) {
      res.render("search", {
        recipe: null,
        error: "error, try with another ingredient"
      });
    } else {
      let fileJson = JSON.parse(body);
			console.log(fileJson);
      let nres = fileJson["hits"].length;
      res.render("risultati", { jsonfile: fileJson, nres: nres });
    }
  });
});


module.exports = router;
