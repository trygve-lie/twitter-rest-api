var Twitter = require('../');


var T = new Twitter();


T.get('users/lookup', { screen_name: 'trygve_lie', count: 100 }, function (){
	console.log('A');
}).on('response', function (response) {
	console.log('B');
});


T.post('statuses/update', { status: 'test' }, function (){
	console.log('C');
}).on('response', function (response) {
	console.log('D');
});


