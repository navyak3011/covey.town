var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/coveytown-chat');

const Entry = require('./model.js');
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

app.get('/fetchAllEntries', function (req, res) {
    Entry.find({}).then(eachOne => {
        res.json(eachOne);
    })
});

app.post('/entry', function (req, res) {
    Entry.create({
                     firstName: req.body.firstName,
                     lastName: req.body.lastName,
                     message: req.body.message,
                     timestamp: Date.now()
                 }).then(entry => res.json(entry))
});
