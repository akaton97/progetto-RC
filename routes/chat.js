var express = require("express");
var router = express.Router();

const {ensureAuthenticated} = require('../public/javascript/authControl');

router.get('/', ensureAuthenticated, (req,res) => {
    res.render('chat', {user: req.user});
});

module.exports = router;
