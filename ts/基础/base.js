/**
 * 1.使用 : 指定变量的类型, : 的前后有没有空格都可以
 * 2.ts之后进行静态检查,如果有错误,编译的时候就会报错
 * */
function sayHello(person) {
    return 'hello' + person;
}
var user = 'tom';
console.log(sayHello(user));
/**
 * 原始数据类型: 布尔值
 * 注意: 使用构造函数 Boolean 创造的对象不是布尔值
 *      let createBoolean: boolean = new Boolean(1);
 *      实际上 new Boolean() 返回的是一个Boolean对象
 * 直接调用 Boolean 也可以发那会一个 Boolean 类型
 * */
var isDone = false;
var createBoolean = Boolean(1);
console.log(isDone, createBoolean);
/**
 * 数值  字符串
 * */
var num = 6;
var str = 'hello';
//字符串模板
var str1 = "this is " + str + ". i will " + num + " years old";
console.log(num, str, str1);
/**
 * 空值: 在 TS 中,可以使用 void 表示没有任何返回值的函数
 * 声明一个 void 类型的变量没有用,因为你只能将它赋值为 undefined 和 null
 * let none: void = undefined;
 * */
function alertName() {
    alert('hello');
}
alertName();
/**
 * 可以使用 null undefined 来定义这两个原始数据类型
 * 与 void 的区别,undefined 和 null 是所有类型的子类型,也就是说 undefined 类型的变量,可以赋值给 number 类型的变量
 * 而 void 类型的变量不可以赋值给number 类型的变量
 * */
var u = undefined;
var n = null;
var num2 = undefined;
/**
 * 任意值: 允许被赋值为任意类型
 * 在任意值上访问属性都是允许的,允许调用任何方法
 * */
var anyThing = 'hello';
console.log(anyThing.myName);
/**
 * 未声明类型的变量: 变量如果在声明的时候,未指定其类型,那就会被识别为任意值类型
 * */
var something;
/**
 * 类型推论: ts会在没有明确的指定类型的时候推测出来一个类型,这就是类型推论
 * 如果定义的时候没有赋值,不管以后有没有赋值,都会被推断成 any 类型而完全不被类型检查
 **/
var myFavorite = 'serve';
// myFavorite = 7; 报错
/**
 * 联合类型: 表示取值可以为多种类型中的一种.
 * 当不确定一个联合类型的变量到底是哪一个类型的时候,只可以访问此联合类型的所有类型里共有的属性或方法
 * 联合类型的变量的被赋值的时候,会根据类型推论的规则推断出一个类型
 * */
var adore1;
// function getLength(something: string | number) {
//     return something.length;  报错
// }
var myFavoriteNumber;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
var tom = {
    id: 123,
    name: 'Tom',
    age: 2
};
/**
 * 数组的类型
 * 1.类型 + 方括号 表示法
 * 2.数组泛型
 * 3.用接口表示数组
 * */
var arr = [1, 2, 3, 4];
// arr.push('8')   报错: 数字的一些方法也会根据数组在定义的时候约定的类型进行限制
var arr2 = [1, 2, 3, 4];
var arr3 = [1, 2, 3, 4, 5];
/**
 * 类数组: 不是数组类型
 * */
function sum() {
    var args = arguments;
}
// 类数组不可以使用普通数组的方式来描述,应该用接口
/**
 * 函数的类型
 * 输入多余的(少的)参数都是不允许的
 * */
function add(x, y) {
    return x + y;
}
add(1, 2);
/**
 * 函数表达式
 * */
var mySum = function (x, y) {
    return x + y;
};
// 编译可以通过,不过实际上,上面的代码只对等号右侧的匿名函数进行类型的定义,而等号左边的mySum,是通过复制操作进行类型推论而推断出来的
// 等价于
var mySum1 = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
/**
 * 函数的可选参数
 * 注意: 可选参数必须接在必须参数后面,简言之,可选参数后面不允许出现必须参数
 * */
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'cat');
var cat = buildName('Tom');
/**
 * 参数默认值: ts会将添加默认值的参数识别为可选参数
 * 此时就不受 可选参数必须接在必须参数后面 的限制了
 * */
function defaultData(data1, data2) {
    if (data2 === void 0) { data2 = 'cat'; }
    return data1 + data2;
}
/**
 * 剩余参数: 可以使用...rest的方式获取函数中的剩余参数(rest参数)
 * */
function push(array) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    item.forEach(function (item) {
        array.push(item);
    });
    console.log(array); // [1,2,3,4]
}
var a = [];
push(a, 1, 2, 3, 4);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
/**
 * 类型断言: 可以用来手动指定一个值的类型
 * */
