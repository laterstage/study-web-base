//加载http核心模块
var fs=require('http')

var server=fs.createServer()
//当客户端发送消息自动触发请求
server.on('request',function (request,response){
    //拿到的是端口号后面的一串东西
    console.log('收到客户端的请求了请即时回复请求路径是'+request.url)
    //write 用来给客户端发送数据
    //可以使用多次 ，但最后一次一定要用end 结束响应
    //response.write('我猜客户端一定不是很好')
    //response.end() 当前方式比较麻烦

    //根据不同路径响应不同的结果 ，就是先获请求路径，然后根据不同的路径来用 if 进行响应的处理
    var url=request.url
    if(url==='/'){
        response.end('hello word')
    }else if(url==='/login'){
        response.end('hello word login')
    }else if(url=='/products'){
     var products=[{
         name:'苹果',
         price:8888
     }, {
         name:'香蕉',
         price:8888
     },{
         name:'菠萝',
         price:8888
     },]
        //是将数组转换成字符串
        response.end(JSON.stringify(products))
    }   else{
        response.end('<p style="background: #0A9676">我是一个不一样的颜色</p>')
    }
})

//4绑定端口 。启动服务器
server.listen(3001,function (){
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3001/来进行访问网页')
})


