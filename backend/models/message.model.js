var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({

                                 firstName: String,
                                 lastName: String,
                                 message: String,
                                 roomId: String,
                                 timestamp: Date
                               });

var message = mongoose.model('messageEntry', messageSchema);
module.exports = message;
