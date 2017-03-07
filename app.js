var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const port = process.env.port || 1337;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/status', (req, res, next) => {
    res.status(200).send('App Works!');
});

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('App started listening at port: ' + this.address().port);
    }
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


