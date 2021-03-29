var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schema = new Schema({

                            firstName: String,
                            lastName: String,
                            message: String,
                            timestamp: Date

                        });

var Entry = mongoose.model('Entry', schema);

module.exports = Entry;
