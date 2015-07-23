/* jshint node: true, strict: true */

/** 
  * @module twitter-rest-api
  */

"use strict";

var request     = require('request'),
    querystring = require('querystring');



/** 
  * Create a new Twitter Rest API client Object
  * @class
  *
  * @param {Object} keys Object containing Twitter API Keys and access tokens
  * @param {String} keys.consumer_key Twitter consumer key (API Key)
  * @param {String} keys.consumer_secret Twitter consumer secret (API Secret)
  * @param {String} keys.token Twitter access token
  * @param {String} keys.token_secret Twitter access token secret
  */

var Twitter = module.exports = function (keys, json, gzip) { 
    this.keys = keys;
    this.json = json ? json : true;
    this.gzip = gzip ? gzip : true;
};



Twitter.prototype.get = function (resource, params, callback) {
    var query   = querystring.stringify(params),
        uri     = 'https://api.twitter.com/1.1/' + resource + '.json?' + query,
        opts    = { 
            headers: {},
            url: uri,
            json: this.json,
            gzip: this.gzip,
            oauth: this.keys
        };

    return request.get(opts, callback);
};



Twitter.prototype.post = function (resource, params, callback) {
    var query   = querystring.stringify(params),
        uri     = 'https://api.twitter.com/1.1/' + resource + '.json?' + query,
        opts    = { 
            headers: {},
            url: uri,
            json: this.json,
            gzip: this.gzip,
            oauth: this.keys
        };

    return request.post(opts, callback);
};



Twitter.prototype.debug = function (callback) {
    callback.call(null, request);
};
