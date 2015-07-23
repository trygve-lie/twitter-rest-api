/* jshint node: true, strict: true */

"use strict";


var TwitterRest = require('../'),
    fs          = require('fs'),
    keysString  = fs.readFileSync('./keys.json'),
    keys        = JSON.parse(keysString);


var Twitter = new TwitterRest(keys);


Twitter.get('search/tweets', {q: 'javascript'}, function (error, response, body) {
    if (error) {
        return console.log(error);
    }
    console.log(body);
});
