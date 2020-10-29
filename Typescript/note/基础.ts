const study: String = 'TypeScript';

//  ---------------------------- 基本类型 ----------------------------

/**
 * 原始类型： boolean, number, string, void, undefined, null, symbol, bigint
 * */

//  boolean
const isOpen: boolean = false;

// number
const num: number = 1010;

// string
const str: string = '字符串';

// void: 表示没有任何类型，当一个函数没有任何返回值时，返回值类型为void 空值
function isVoid(): void {
    console.log('void')
}
// 实际上只有null undefined可以赋给void
const voidVal: void = undefined;

// null undefined 

// symbol "lib": ["es6", "dom"]添加es6的编译辅助库, symbol的值是唯一不变的
const sym1 = Symbol('key1');

console.log(Symbol('key1') === Symbol('key1')) // false

// Bigint ts3.2版本内置，安全存储大整数，添加 "lib": ["ESNext"] 编译辅助库

// any: 不确定的类型
let notSure: any = 5;
notSure = 'is not sure';

// unknown: ts3.0 是any类型对应的安全类型 相比any, unknown类型更加安全，unknown在执行大多数操作之前
// 必须进行某种形式的检查，要不报错
function getUnknow(value: unknown): String {
    if(value instanceof Date) { // 这里把类型缩小为Date实例的范围内
        return value.toISOString();
    }
    return String(value)
}

// never: 表示永不存在值得类型
// 抛出异常的函数永远不会有返回值
function error(message: string): never {
    throw new Error(message);
}

const empty: never[] = []; // 空数组，而且永远是空的

// 数组 定义方式有两种 泛型 | 元素类型后面接上[]
const list: Array<number> = [12, 3, 11];
const list2: number[] = [22, 3, 4];

// 元组： 和数组类似，表示一个已知元素和类型的数组，各元素的类型不必相同
let x: [string, number];
x = ['111', 111];

interface Tuple extends Array<string | number> {
    0: number;
    1: string;
    length: 2
}
// console.log(x[2]); Tuple type '[string, number]' of length '2' has no element at index '2'

// 枚举： 当一个变量有多种取值的可能，可以把它定义为枚举的类型
enum Direction {
    up,
    Down,
    Left,
    Rights
}
console.log(Direction[0])

//  ---------------------------- 接口  ----------------------------

interface User {
    name: string
    age?: number              // 可选属性
    isMale: boolean
    readonly isSex: boolean   // 只读属性
} 

// 函数类型 一种直接在接口内部描述函数 | 先用接口描述函数类型，然后在使用
interface Man {
    say: (word: string) => string
    play: Play
}

interface Play {
    (play: string): string
}

// 属性检查
interface Config {
    width?: number
    [propName: string]: any
}

function Select(config: Config): { area: number } {
    let square = 100;
    square = config.widthh * config.widthh;
    return { area: square}
}
let mySquare = Select({  width: 3, widthh: 55});

// 可索引类型： 具体一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
interface Phone {
    [name: string]: string
}
interface UserTwo {
    phone: Phone
}

// 继承接口 | 继承接口添加属性
interface VIPUser extends User, UserTwo {
    newSay: () => void
}

//  ---------------------------- 类（class）  ----------------------------

/** 
 * 抽象类: 做为其他派生类的基类使用，它们一般不会直接被实例化使用，不同于接口
 *       抽象类可以包含成员的实现细节
 * abstract: 关键字用于定义抽象类和在抽象类里定义的抽象方法
 */
abstract class Animal {
    abstract mackSound(): void;
    move(): void {
        console.log('running')
    }
}

/**
 * 1.实例化抽象类会报错
 * 2.需要创建子类实现基类，然后实例化子类
 */
class Cat extends Animal {
    mackSound() {
        console.log('miao miao')
    }
}
const cat = new Cat();
cat.mackSound();
cat.move();

/**
 * 访问限定符：
 *     public: 成员默认都是public，可以被外部访问
 *     private: 只能被类的内部访问
 *     protected: 只可以被类的内部以及类的子类访问
 */

//  ---------------------------- 函数（Function）  ----------------------------

const add = (a: number, b: number ) => a + b;  // const add: (a: number, b: number) => number

//函数参数的详解
// 可选参数：参数后面添加?,表示参数可能不存在
const add1 = (a: number, b?: number) => a + ( b ? b : 0); //参数b，有 number 与 undefined 两种可能

// 默认参数
const add2 = (a: number, b = 10) => a + b;

// 剩余参数
const add3 = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)

//  ---------------------------- 重载（Overload）  ----------------------------

//  ---------------------------- 泛型（generic）  ----------------------------

// 泛型：这个变量代表传入的类型，然后再返回这个变量，一种特殊的变量，只用于表示类型而不是值

function returnItem<T>(para: T): T {
    return para;
}

// 函数名称后面声明泛型变量 <T>,它用于捕获开发者传入的参数类型，然后就可以使用 T 做为参数类型和返回值类型

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
swap([6, 'seven']);

// 泛型变量
function getLength<T>(arg: Array<T>) {
    console.log((arg as Array<any>).length);
    return arg;
}

// 泛型接口
interface ItemFn<T> {
    (para: T): T
}
const itemFn: ItemFn<number> = para => para;

// 泛型类： 既可以作用于类本身，也可以作用于类的成员函数
class Stack<T> {
    private arr: T[] = [];

    public push(item: T) {
        this.arr.push(item);
    }
}

// 泛型约束：约束泛型，当传入类型错误，报错
type Params = number | string;
class Stacks<T extends Params> {
    private arr: T[] = [];
    public push(item: T) {
        this.arr.push(item);
    }
}
const stack = new Stacks<1>();

// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}
const aa = { name: 'xingming', id: 22 };
getValue(aa, 'name');

// 使用多重类型进行泛型约束 (本案例要在非strict下测试)
// interface First {
//     doing(): number
// }
// interface Second {
//     done(): string
// }
// class All<T extends First & Second>{
//     private all: T

//     userT() {
//         this.all.doing();
//         this.all.done();
//     }
// }

// 泛型与new | 参数type的类型 { new(): T } 就表示此泛型T是可被构造的，再被实例化后的类型是泛型T
function factory<T>(type: { new(): T}): T {
    return new type();
}

//  ---------------------------- 类型断言与类型守卫  ----------------------------

// 类型断言： 有些情况不能正确或准确的判断类型，比如后续给对象添加属性
// const person = {}
// person.name = 'xiao ming'; // 报错

interface Person {
    name: string
    age: number
}

const person = {} as Person;
person.name = 'xiao ming';

// 双重断言
const people = 'xiao ming' as any as Person;

// 类型守卫：缩小类型的范围
// 1. instanceof 类型保护是通过构造函数来细化类型的一种方式
// 2. in   x in y 表示x属性在y中存在
// 3. 字面量类型守卫
class A {
    name = 'xiao ming'
}
class B {
    age: number = 12
    sex = 'nan'
}
function getAB(arg: A | B) {
    if (arg instanceof A ){
        console.log(arg.name);
        // console.log(arg.age); // error
    }
}
type C = {
    age: 12;
    sex: 'nan'
}
type D = {
    age: 13;
    sex: 'woman',
    height: 175
}

function getCD(arg: C | D) {
    if (arg.age === 12 ){
        console.log(arg.sex);
        // console.log(arg.height); // error
    }
}

// 类型兼容性：是基于结构类型的，结构类型是一种只使用成员来描述类型的方式
class E {
    constructor(public name: string, public age: number, public id: number) {
        
    }
}
interface F {
    name: string
    age: number
}
let f: F = new E('xx', 12, 23); // F 兼容 E

// 函数的类型兼容性
// 1. 函数参数兼容性 x 是否可以赋值给 y 
let  xa = (a: number) => 0;
let ya = (a: number, b: string) => 2
ya = xa;
// xa = ya; // 不能将类型“(a: number, b: string) => number”分配给类型“(a: number) => number”。

// 枚举类型的兼容性： 枚举与数字类型相互兼容

// 类的类型兼容性： 只有实例成员和方法会相比较，构造函数和静态成员不会被检查
//                 私有的和受保护的成员必须来自相同的类




















