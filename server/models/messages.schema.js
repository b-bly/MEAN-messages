var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messages = new Schema({
    name : { type: String },
    message : { type: String }
},
{
    collection: 'messages'
});

var schema = mongoose.model('Messages', messages);


module.exports = schema;


