var Timer = require('timer');

t = Timer({
	ontick : function(sec) {
		console.log(sec);
	}
});
t.on('end', function() {
	console.log('timer finished normally');
});
t.start(10);