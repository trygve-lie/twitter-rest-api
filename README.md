# twitter-rest-api

[![Dependencies](https://img.shields.io/david/trygve-lie/twitter-rest-api.svg?style=flat-square)](https://david-dm.org/trygve-lie/twitter-rest-api)


A [Twitter REST API](https://dev.twitter.com/rest/public) client with stream 
support.



## Installation

```bash
$ npm install twitter-rest-api
```


## Simple usage

Connect to the Twitter REST API and search for messages containing the word 
"javascript".

```js
var TwitterRest = require('twitter-rest-api'),
    fs = require('fs');

var keys = {
    consumer_key : "your_consumer_key",
    consumer_secret : "your_consumer_secret",
    token : "your_access_token_key",
    token_secret : "your_access_token_secret"
};

var Twitter = new TwitterRest(keys);
Twitter.get('search/tweets', {q: 'javascript'}, function (error, response, body) {
	console.log(body);
});
```

or as a stream:

```js
Twitter.get('search/tweets', {q: 'javascript'}).pipe(fs.createWriteStream('tweets.txt'));
```



## Constructor

Create a new Twitter REST API instance.

```js
var Twitter = new TwitterRest(keys, json, gzip);
```


### keys (required)

Takes an Object containing your Twitter API keys and access tokens. The Object 
are as follow:

```js
{
    consumer_key : "your_consumer_key",
    consumer_secret : "your_consumer_secret",
    token : "your_access_token_key",
    token_secret : "your_access_token_secret"
}
```

Twitter API keys and tokens can be [generated here](https://apps.twitter.com/).


### json (optional)

Boolean value for controlling if the returned value for `data` in the callback
should return Objects or not. If the response is piped to another stream this
is ignored. Default value is `true`.


### gzip (optional)

Boolean value for controlling if the requests against Twitter should be gzipped
or not. Default value is `true`.



## API

The Twitter Rest API instance have the following API:

### .get(resource, parameters, callback)

To be documented!


### .post(resource, parameters, callback)

To be documented!


### .debug(callback)

Under the hood this client use [request](https://github.com/request/request) to
connect to the Twitter Rest API. Request have several tools for debugging its
connection(s). This method provide access to the underlaying request object so
one can plug in a debugger to [request](https://github.com/request/request).

The underlaying request object are available as the first argument on the 
callback.

Example using [request-debug](https://github.com/request/request-debug):

```js
var Twitter = new TwitterRest(keys);

Twitter.debug(function (reqObj) {
    require('request-debug')(reqObj, function (type, data, req) {
        console.log(type, data, req);
    });
});
```



## License 

The MIT License (MIT)

Copyright (c) 2015 - Trygve Lie - post@trygve-lie.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
