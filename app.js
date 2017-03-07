var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.set('port', (process.env.PORT || 1337));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status', (req, res, next) => {
    res.status(200).send('App Works!');
});

var server = http.createServer();

app.get('/', function (request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});

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


