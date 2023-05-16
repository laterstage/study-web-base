//加载http核心模块
var fs=require('http')
/*
* 使用http.createServer()方法 创建一个web服务器
* 返回一个Srever实例
*request 可以获取客户端发送来的一些请求信息，例如路径
* Repnse响应对象
*   响应对象可以用来发给客户端的响应信息的
*
*
* */


var server=fs.createServer()
//当客户端发送消息自动触发请求
server.on('request',function (){
    console.log('收到客户端的请求了请即时回复')
})
//4绑定端口 。启动服务器
server.listen(3001,function (){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3001/来进行访问网页')
})


