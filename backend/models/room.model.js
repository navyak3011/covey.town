const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var roomSchema = new Schema({
                              roomId: String,
                              friendlyName: String,
                              isPublic: Boolean
                            });

var room = mongoose.model('roomEntry', roomSchema);
module.exports = room;
