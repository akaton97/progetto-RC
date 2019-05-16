var express = require("express");
var router = express.Router();
var request = require("request");

router.get('/', function(req,res) {
	let url = 'https://api.themoviedb.org/3/movie/5?api_key=807244b48f548385eab5d123309248e6&language=it&append_to_response=hello';
  request(url, function(err,resp,body){
    if(err) console.log("err");
    else{
		
      res.json(JSON.parse(body))
    }
  })

});



module.exports = router;
