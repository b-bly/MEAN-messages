var express = require('express');
var router = express.Router();


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

router.post('/', function (req, res) {
    var message = new Messages(req.body);
    message.save(function (err, data) {
        if (err) {
            console.log('save error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});


module.exports = router;
