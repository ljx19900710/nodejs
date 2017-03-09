//监听其他操作方法

//方法
//为指定事件添加一个监听器到监听器数组的尾部。
addListener(event, listener)

//为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
on(event, listener)
server.on('connection', function (stream) {
  console.log('someone connected!');
});

//为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
once(event, listener)
server.once('connection', function (stream) {
  console.log('Ah, we have our first user!');
});

//移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。
removeListener(event, listener)
var callback = function(stream) {
  console.log('someone connected!');
};
server.on('connection', callback);
server.removeListener('connection', callback);

//移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
removeAllListeners([event])

//默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
setMaxListeners(n)

//返回指定事件的监听器数组。
listeners(event)

//按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
emit(event, [arg1], [arg2], [...])


//类方法
//返回指定事件的监听器数量。
listenerCount(emitter, event)


//事件
//newListener
//event - 字符串，事件名称
//listener - 处理事件函数
//该事件在添加新监听器时被触发。

//removeListener
//event - 字符串，事件名称
//listener - 处理事件函数
//从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。























