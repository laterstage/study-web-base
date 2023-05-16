//使用require方法加载fs核心模块
var fs=require('fs');
//第一个参数是是读取文件
//第二个参数是一个回调函数
    //error
    //读取失败error就是错误对象
    //读取成功error就是null
    //成功则与其相反 data
fs.readFile('./hellow.txt',function (error,data){
    console.log(data.toString())
    //2进制转换成16进制 可以通过toString 方法转换成人类认识的语言
    console.log(error)

});