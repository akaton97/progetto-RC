var express = require("express");
var router = express.Router();
var request = require("request");
var app = express()

router.get('/', function(req,res) {
		res.render("films", {title: "Express"})
});
/*
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
