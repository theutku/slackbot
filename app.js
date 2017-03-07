var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status', (req, res, next) => {
    res.status(200).send('App Works!');
});

var server = http.createServer();

server.listen(process.env.port || 5000);

console.log('Server started listening at port: ', port);

app.post('/hello', (req, res, next) => {
    var userName = req.body.user_name;
    var botPayLoad = {
        text: 'Hello, ' + userName + '! I saw that you called for me! This is an experimental test bot for AI Brite!'
    }

    if (userName !== 'slackbot') {
        return res.status(200).json(botPayLoad);
    } else {
        return res.status(200).end();
    }
})


