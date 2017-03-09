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
var msg = eventEmitter.listeners('fun1');
console.log(msg);