/**
 * 1.使用 : 指定变量的类型, : 的前后有没有空格都可以
 * 2.ts之后进行静态检查,如果有错误,编译的时候就会报错
 * */

function sayHello(person: string) {
    return 'hello' + person
}

let user = 'tom';
console.log(sayHello(user));

/**
 * 原始数据类型: 布尔值
 * 注意: 使用构造函数 Boolean 创造的对象不是布尔值
 *      let createBoolean: boolean = new Boolean(1);
 *      实际上 new Boolean() 返回的是一个Boolean对象
 * 直接调用 Boolean 也可以发那会一个 Boolean 类型
 * */

let isDone: boolean = false;
let createBoolean: boolean = Boolean(1);
console.log(isDone, createBoolean);

/**
 * 数值  字符串
 * */

let num: number = 6;
let str: string = 'hello';
//字符串模板
let str1: string = `this is ${str}. i will ${num} years old`;
console.log(num, str, str1);

/**
 * 空值: 在 TS 中,可以使用 void 表示没有任何返回值的函数
 * 声明一个 void 类型的变量没有用,因为你只能将它赋值为 undefined 和 null
 * let none: void = undefined;
 * */

function alertName(): void {
    alert('hello')
}
alertName();