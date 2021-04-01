var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coveytown-chat');

const messageEntry = require('./models/message.model.js');
const roomEntry = require('./models/room.model.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.listen(3000);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin",
             "*");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
             "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/', function (req, res) {
  res.json({message: 'yaaay'});
});

app.get('/fetchAllMessages', function (req, res) {
  messageEntry.find({}).then(eachOne => {
    res.json(eachOne);
  })
});

app.get('/fetchAllMessages/:roomId', function (req, res) {
  messageEntry.find({roomId: req.params.roomId}).then(each => {
    res.json(each)
  });
});

app.post('/message', function (req, res) {
  messageEntry.create({
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        message: req.body.message,
                        roomId: req.body.roomId,
                        timestamp: Date.now()
                      }).then(entry => res.json(entry))
});

app.post('/room', function (req, res) {
  roomEntry.create({
                     // fetch roomID, friendly name and isPublic from prof's code
                     roomId: req.body.roomId,
                     friendlyName: req.body.friendlyName,
                     isPublic: req.body.isPublic
                   }).then(entry => res.json(entry))
});
