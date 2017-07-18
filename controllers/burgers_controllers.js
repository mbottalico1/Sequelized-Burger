var express = require('express');
var Burgers = require('../models/sequelized-burger.js');
var router = express.Router();

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res) {
	Burgers.all(function(data) {
	var hbsObject = { burgers: data };
    res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res) {
	burgers.create(['burger_name'], [req.body.burgerName], function () {
		res.redirect('/');
	})
	 
});




module.exports = router;
