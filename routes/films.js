var express = require("express");
var router = express.Router();
var request = require("request");
var app = express()

router.get('/', function(req,res) {
		res.render("films", {title: "Express"})
});
/*
router.post("/", function(req, res) {
  let id = req.params.name;
	console.log(id)
  let url = "https://api.themoviedb.org/3/movie/"+
	id	+"?api_key=807244b48f548385eab5d123309248e6&language=en-US";
  request(url, function(err, response, body) {
    if (err) {
      res.render("films", alert("pio"));
    }
    else {
      let fileJson = JSON.parse(body);
      res.render("risultato", { filmo: fileJson});
    }
  });
});

router.get('/:id', function (req, res, next) {
	console.log("pio")
  console.log('ID:', req.params.id)
  next()
}, function (req, res, next) {
	console.log("pio")
  res.send('risultato')
})

router.get('/:id', function (req, res, next) {
  res.end(req.params.id)
})

app.use('/', router)
*/
module.exports = router;
