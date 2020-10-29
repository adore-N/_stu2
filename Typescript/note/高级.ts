//  ---------------------------- 高级类型 ----------------------------

// 交叉类型：将多个类型合并为一个类型
interface AngObject {
    [prop: string]: any;
}

function mixin<T extends AngObject, U extends AngObject>(first: T, second: U){
    let result = <T & U>{};
    for(let id in first) {
        (<T>result)[id] = first[id]
    }
    for(let id in second) {
        (<U>result)[id] = second[id]
    }
    return result;
}
const xx = mixin({ name: 'xiao ming'}, {id: 12})
console.log(xx, '交叉类型：将多个类型合并为一个类型s')

// 联合类型：希望类型是多多种属性之一，number | [] 用 | 分隔每个类型
function format(command: string[] | string) {
    let line = '';
    if (typeof command === 'string') {
        line = command.trim();
    } else {
        line = command.join(' ').trim();
    }
} 

// 类型别名：会给一个类型起一个新的名字，和接口很像，但是可以作用于原始值，联合类型等
type some = string | number;
const a: some = 'xiao ming'
const b: some = 69;

//  ---------------------------- 可辨识联合类型 ----------------------------

// 字面量类型：字面量类型的要和实际的值得字面量一一对应，如果不一致就会报错
const c: 233 = 233;
// const d: 'xiao ming' = 'xiao bao'; // 不能将类型“"xiao bao"”分配给类型“"xiao ming"”。

// 类型字面量：不同于字面量类型，和Js的对象字面量的语法相似

// 可辨识联合类型
/**
 * 假设一个场景，一个创建用户create，一个删除用户delete，创建不需要id随机生成，删除需要
 * 
 */
interface Info {
    username: string
}
type UserAction = | {
    id: number
    action: 'delete'
    info: Info
} | {
    action: 'create'
    info: Info
}
const UserReducer = (userAction: UserAction) => {
    //console.log(userAction.id); // 类型“UserAction”上不存在属性“id”。 类型“{ action: "create"; info: Info; }”上不存在属性“id”。
    switch(userAction.action) {
        case 'delete':
            console.log(userAction.id);
            break;
        default: 
            console.log(userAction.info)
            break;
    }
}
// 这里的userAction.action就是辨识的关键，也是可辨识的标签

//  ---------------------------- 装饰器 ----------------------------
/**
 * 装饰器：是给一个已有的方法或者类拓展一些新的行为，而不是去直接修改它本身
 * 开启支持选项 experimentalDecorators: true
 */

//  类装饰器
function addAge(constructor: Function) {
    constructor.prototype.age = 18;
}
@addAge
class Person {
    name: string
    age!: number
    constructor() {
        this.name = 'xiao ming'
    }
}
let peroson = new Person()
console.log(peroson.age);
