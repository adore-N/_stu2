var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
// handleEvent(document.getElementById('world'), 'dbclick'); // 报错
/**
 * 元组: 合并不同类型的对象
 * 1.访问或赋值一个已知索引的元素时,会得到正确的类型
 * 2.但是直接对元组类型的变量进行初始化获取赋值的时候,需要提供所有元组类型中指定的项
 * 越界的元素: 当添加越界的元素时,它的类型会被限制为元组中每个类型的联合类型
 * tom.push(true)  //报错
 * */
var tom = ['Tom', 25];
/**
 * 枚举: 用于取值被限定在一定范围内的场景: 比如一周七天
 *       使用 enum 关键字定义
 * 枚举成员会被赋值从 0 开始递增的数字,同时也会对枚举值到枚举名进行反向映射
 * 也可以手动赋值,未手动赋值的枚举项会接着上一个枚举项递增,数值重复,ts不会察觉到
 * 手动赋值的枚举项可以不是数字,但是要使用类型断言来让 tsc 无视类型检查
 * */
var Days;
(function (Days) {
    Days[Days["sun"] = 0] = "sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days);
/**
 * 常数项 and 计算所得项
 * */
/**
 * 类:
 * public: 修饰的属性或方法是共有的,可以在任何地方被访问到.默认所有的属性和方法都是public
 * private: 修饰的属性和方法都是私有的,不能在声明它的累的外部访问
 * protected: 修饰的属性或方法是受保护的,它的private类似,区别是它在子类中也是允许被访问的
 *
 * 当构造函数修饰为private时,该类不允许被继承或者实例化
 * 当构造函数修饰为protected时,该类只允许被继承
 * */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var a = new Animal('Jack');
// console.log(a.name); // Jack
// a.name = 'Tom';
/**
 * readonly 只读属性关键字,只允许出现在属性声明或索引签名中
 * 注意: 如果 readonly 和其他访问修饰符同时存在的话，需要写在其后面。
 * */
var Animal1 = /** @class */ (function () {
    // public readonly name;
    function Animal1(name) {
        this.name = name;
        this.name = name;
    }
    return Animal1;
}());
/**
 * 抽象类:
 * 1.抽象类是不允许被实例化的
 * 2.抽象类中的抽象方法必须被子类实现
 * */
var AnimalFather = /** @class */ (function () {
    function AnimalFather(name) {
        this.name = name;
    }
    return AnimalFather;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sayHi = function () {
        console.log("Meow, My name is " + this.name);
    };
    return Cat;
}(AnimalFather));
var cat = new Cat('Tom');
