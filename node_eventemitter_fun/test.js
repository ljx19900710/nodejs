var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('fun1',function(){
	console.log('haha1');
});
eventEmitter.on('fun1',function(){
	console.log('haha2');
});
eventEmitter.on('fun3',function(){
	console.log('haha3');
});

eventEmitter.emit('fun1');
var msg = events.EventEmitter.listenerCount(eventEmitter,'fun1');
console.log(msg);