/*
* Buffer(缓冲区）
* 操作方式类似数组
* 数组不能存储二进制文件
* 不需要引用模块，直接使用即可
*
* 是以二进制存储，都是以16进制显示
*
* */
var str="hello atguigu";
var buf=Buffer.from(str);
console.log(buf);