//个人想到用例 购买电影票
var events = require('events');


var eventEmitter = new events.EventEmitter();
//从缓存中取票
eventEmitter.on('buy_ticket',function(tid,matchid){
	console.log('从缓存场次中取出场次：',matchid,'票号：',tid);
});
//锁定票
eventEmitter.on('buy_ticket',function(tid,matchid,userid){
	console.log('用户：' , userid , '购买场次:' , matchid,'的票：' , tid);
});
//入单加入缓存set
eventEmitter.on('buy_ticket',function(tid,matchid,userid){
	console.log('set缓存表：第' , matchid,'场次，键为：' , tid,'值为:' , userid);
});
//短信通知购买待支付
eventEmitter.on('buy_ticket',function(tid,matchid,userid){
	console.log('短信通知 用户：' , userid , '购买场次为：' , matchid);
});

eventEmitter.emit('buy_ticket',1,1,1);