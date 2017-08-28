var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaName = new Schema({
    prop : { type: Number }
},
{
    collection: 'collectionName'
});
var schemaObject = {};
schemaObject.listingSchema = mongoose.model('Listings', schemaName);

// export our model
module.exports = schemaObject;


