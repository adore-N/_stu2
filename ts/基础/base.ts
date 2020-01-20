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

/**
 * 可以使用 null undefined 来定义这两个原始数据类型
 * 与 void 的区别,undefined 和 null 是所有类型的子类型,也就是说 undefined 类型的变量,可以赋值给 number 类型的变量
 * 而 void 类型的变量不可以赋值给number 类型的变量
 * */
let u: undefined = undefined;
let n: null = null;

let num2: number = undefined;

/**
 * 任意值: 允许被赋值为任意类型
 * 在任意值上访问属性都是允许的,允许调用任何方法
 * */
let anyThing: any = 'hello';
console.log(anyThing.myName);

/**
 * 未声明类型的变量: 变量如果在声明的时候,未指定其类型,那就会被识别为任意值类型
 * */
let something;

/**
 * 类型推论: ts会在没有明确的指定类型的时候推测出来一个类型,这就是类型推论
 * 如果定义的时候没有赋值,不管以后有没有赋值,都会被推断成 any 类型而完全不被类型检查
 **/
let myFavorite = 'serve';
// myFavorite = 7; 报错

/**
 * 联合类型: 表示取值可以为多种类型中的一种.
 * 当不确定一个联合类型的变量到底是哪一个类型的时候,只可以访问此联合类型的所有类型里共有的属性或方法
 * 联合类型的变量的被赋值的时候,会根据类型推论的规则推断出一个类型
 * */
let adore1: string | number;
// function getLength(something: string | number) {
//     return something.length;  报错
// }
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
// console.log(myFavoriteNumber.length); // 编译时报错: 这里推断为number,访问length就会报错

/**
 * 对象的类型--接口: 使用接口来定义对象的类型
 * 定义的变量比接口少一些属性是不被允许的,多一些也不可以
 * 可选属性: 可以不存在
 * 只读属性: 一些字段只能在创建的时候被赋值.
 * */
interface Person {
    readonly id: number, // 注意: 只读的约束在于第一次给对象赋值的时候,而不是第一次给只读属性赋值的时候.
    name: string,
    age: number,
    sex?: number, //可选属性
    // [propName: string]: any, // 任意属性: 使用[firstName: string] 定义了任意属性取string类型的值

}
let tom: Person = {
    id: 123,
    name: 'Tom',
    age: 2,
    // firstName: 'make' // 报错: 注意: 一旦定义了任意属性,那么确定属性,可选属性的类型都必须是它的类型的子集,number不是string的子属性
};

/**
 * 数组的类型
 * 1.类型 + 方括号 表示法
 * 2.数组泛型
 * 3.用接口表示数组
 * */
let arr: number[] = [1,2,3,4];
// arr.push('8')   报错: 数字的一些方法也会根据数组在定义的时候约定的类型进行限制
let arr2: Array<number> = [1,2,3,4];
interface NumberArray {
    [index: number]: number
}
let arr3: NumberArray = [1,2,3,4,5];

/**
 * 类数组: 不是数组类型
 * */
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
// 类数组不可以使用普通数组的方式来描述,应该用接口

/**
 * 函数的类型
 * 输入多余的(少的)参数都是不允许的
 * */
function add(x: number, y: number): number {
    return x + y;
}
add(1,2);

/**
 * 函数表达式
 * */
let mySum = function (x: number, y: number): number {
    return x + y;
};
// 编译可以通过,不过实际上,上面的代码只对等号右侧的匿名函数进行类型的定义,而等号左边的mySum,是通过复制操作进行类型推论而推断出来的
// 等价于
let mySum1: (x: number, y: number) => number = function (x: number, y:number): number {
    return x + y;
};

/**
 * 用接口定义函数的形状
 * */
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source:string, subString: string) {
    return source.search(subString) !== -1;
};

/**
 * 函数的可选参数
 * 注意: 可选参数必须接在必须参数后面,简言之,可选参数后面不允许出现必须参数
 * */
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }else {
        return firstName;
    }
}
let tomcat = buildName('Tom','cat');
let cat = buildName('Tom');

/**
 * 参数默认值: ts会将添加默认值的参数识别为可选参数
 * 此时就不受 可选参数必须接在必须参数后面 的限制了
 * */
function defaultData(data1: string, data2: string = 'cat') {
    return data1 + data2;
}
/**
 * 剩余参数: 可以使用...rest的方式获取函数中的剩余参数(rest参数)
 * */
function push(array: any[], ...item: any[]) {
    item.forEach(function (item) {
        array.push(item);
    });
    console.log(array); // [1,2,3,4]
}
let a = [];
push(a,1,2,3,4);

/**
 * 重载: 允许一个函数接收不同数量或类型的参数时,做出不同的处理
 * 重复定义多次函数,前几次定义,最后实现
 * 注意: ts 会优先从最前面的函数开始匹配,要考虑优先把精确的定义在前面
 * */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

/**
 * 类型断言: 可以用来手动指定一个值的类型
 * <类型>值   or  值 as 类型
 * 断言不是类型转换,断言成一个联合类型中不存在的类型是不允许的
 * */
function getAssertion(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}



