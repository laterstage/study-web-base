//使用require方法加载fs核心模块
var fs=require('fs');
//第一个参数 是写入的路径
//第二个参数 是写入的内容
//第三个参数 是回调的函数
fs.writeFile('./he.md','大家好我是nodejs，欢迎大家的使用',function (error){
    console.log('文件写入成功过')
});