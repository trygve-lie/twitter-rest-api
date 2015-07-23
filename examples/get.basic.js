/* jshint node: true, strict: true */

"use strict";


var TwitterRest = require('../'),
    fs          = require('fs'),
    keysString  = fs.readFileSync('./keys.json'),
    keys        = JSON.parse(keysString);


var Twitter = new TwitterRest();


Twitter.get('users/lookup', {screen_name: 'trygve_lie'}, function (error, response, body) {
    console.log(body);
});
