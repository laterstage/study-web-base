/*
* 告诉客户端，我发送的是什么编码
*
*
* */
//加载http核心模块
var fs=require('http')
var server=fs.createServer()
//当客户端发送消息自动触发请求
server.on('request',function (request,response){
    //拿到的是端口号后面的一串东西
    console.log('收到客户端的请求了请即时回复请求路径是'+request.url)
    //返回设置协议头，来实现对页面的编写 text/html
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end('真是的')
})

//4绑定端口 。启动服务器
server.listen(3001,function (){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3001/来进行访问网页')
})


