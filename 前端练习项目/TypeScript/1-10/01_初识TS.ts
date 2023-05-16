//所有js代码都支持再ts使用

let a:number=100;
let b:string;
a=10;
b='afa';
//可以编译成任意版本的js
//如果变量声明和赋值同时进行，则进行自动检测 和确定类型 let c=false;
function sum(a:number,b:number):number{
    return a+b;
}
//设置返回值为字符串类型

let b:"好" | "不好";// 表示或者的意思 字面量
//any 表示随便的意思  类似原生的js类型  不建议使用  let b TS解析器自动判断类型 相当于隐式 any
// unknow 表示不知的意思   不能实现 进行赋值 是一个类型安全的按钮
//类型断言  s=e as string  就是告诉编译器 e 是字符串
//如何不写 返回值根据返回值来判断  返回值类型 :void 表示返回值为空 never表示永远不会返回
/**
 * object  表示一个js对象
 * 在开发当中不会使用
 *
 * */
let c:{name:string ,age?:string,[propName:string]:any};//在属性后面加上一个？号表示可有可无
//最后表示任意类型，任意数量
//赋值的时候必须有属性b={name:'孙悟空'} 上下加的时候同时加
let d:(a:number,b:number)=>number;//表示返回值number
//定义一个数组
let shuz:string[];
shuz=['1','2'];
//定义一个类型数组
let g:array<number>;//表示定义一个数值类型的数组 能不用则不用
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
let k:1|2;
type myType=string;//相当于起别名

//tsc ts文件 -w 一直监视文件  一直监视一个文"件

//自动编译需要在编译器配置 tscconfig 配置文件  {} 里面直接添加一个对象  输入tsc 则自动编译当前界面所有文件
//tsc -w 进入监视模式 tsconfig.json可以根据当前文件进行编译
/**
 *
 *[类 readOnly 的变量，是只能可以读不能 删除
 * static 可以定义静态属性 以static 调用就是类方法
 * 如果在子类当中写了构造函数  则会直接代替的父类的构造函数
 * 在子类就必须在父类对父亲的子类进行构造函数
 *
 * abstrcat class  a{}
 *抽象类必须能继承
 * 抽象想方法只能定义在抽象类 只能实现重写 返回值可有可无
 * 接口就是interface 名字 用来定义一个类包含那些类型和接口
 * 一个接口 有三个数据  类似创建 3个同名的结构
 * 接口可以在定义类可以限制接口的结构
 * 接口的属性不能有实际值
 * 用类去实现接口
 *
 * 可以使用泛型
 * function fn<t> (a:t):t{
 *     return a;  不指定泛型，不能对齐一个推断
 *
 * }
 * 限制接口的类型
 * function fn3<Textends inter>(){
 *     
 * }
 *
 *
 *
 *
 * */

