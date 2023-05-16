//所有js代码都支持再ts使用
var a = 100;
var b;
a = 10;
b = 'afa';
//可以编译成任意版本的js
//如果变量声明和赋值同时进行，则进行自动检测 和确定类型 let c=false;
function sum(a, b) {
    return a + b;
}
//设置返回值为字符串类型
var b; // 表示或者的意思 字面量
//any 表示随便的意思  类似原生的js类型  不建议使用  let b TS解析器自动判断类型 相当于隐式 any
// unknow 表示不知的意思   不能实现 进行赋值 是一个类型安全的按钮
//类型断言  s=e as string  就是告诉编译器 e 是字符串
//如何不写 返回值根据返回值来判断  返回值类型 :void 表示返回值为空 never表示永远不会返回
/**
 * object  表示一个js对象
 * 在开发当中不会使用
 *
 * */
var c; //在属性后面加上一个？号表示可有可无
//最后表示任意类型，任意数量
//赋值的时候必须有属性b={name:'孙悟空'} 上下加的时候同时加
var d; //表示返回值number
//定义一个数组
var shuz;
shuz = ['1', '2'];
//定义一个类型数组
var g; //表示定义一个数值类型的数组 能不用则不用
//元组 是固定长度的数组
//语法 :[number,string ] 不一样的数据类型
//enum 枚举
// eunm Gener{
//         Male=0,
//         female=1
// };
// let i:{name:string ,gender:Gener };
// i={
//     // name:'孙悟空',
//     gender:Gener.Male
// }
//& 表示同时，两个都是需要满足  类型的别名
var k;
//tsc ts文件 -w 一直监视文件  一直监视一个文件
//自动编译需要在编译器配置 tscconfig 配置文件
