var db = require("../models");
<<<<<<< HEAD
var express = require("express");
var bodyParser = require("body-parser");
var request = require("request")
var router = require('express').Router();
var PORT = process.env.PORT || 8080;
var app = express();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var apiKey = 'AIzaSyCnzqPNGmrowxNR - tx0qp0KKVG8pCk_g4U';

// turn by turn directions
request("https://maps.googleapis.com/maps/api/directions/json?origin=Tucson&destination=Phoenix&key=" + apiKey, function (err, res, bod) {
	var inst = JSON.parse(bod).routes[0].legs[0];
	//console.log(inst);
	console.log(inst.start_address);
	console.log(inst.duration);
	console.log(inst.end_address);
	for (var i = 0; i < inst.steps.length; i++) {
		console.log(inst.steps[i].html_instructions);
	}

})

=======
require("dotenv").config();
var bodyParser = require("body-parser");
var request = require("request")
var router = require('express').Router();
var keys = require("../keys.js"); 
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var googleApi = (keys.google);


router.get('/api/maps', function(req, res, next){

    var address = req.query.address;
    request("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key="+googleApi.key, function(err, response, data){
        // console.log(data);
        var mapAddress = JSON.parse(data);
			var lat = (mapAddress.results[0].geometry.location.lat);
			var lng = (mapAddress.results[0].geometry.location.lng);
			console.log(lat);
            console.log(lng);
            res.json(mapAddress);

            
    })

})

module.exports = router;


// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
>>>>>>> 8356ff2ea9fa28f90cc06179f817eca6f032f52e
