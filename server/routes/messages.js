var express = require('express');
var router = express.Router();
// bring in our Mongoose model

// bring in our Mongoose model
var Messages = require('../models/messages.schema.js');

router.get('/', function(req, res) {
    Messages.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {          
            res.send(data);
        }
    });
});

module.exports = router;