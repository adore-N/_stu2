function greeter(person) {
    return 'hello' + person;
}
/**
 * 这里如果对于形参不定义类型，就会报错，这里和配置文件有关
 * 加上之后函数的自动会加上返回值的类型，这就是ts的自带的类型推导
 */
var user = 'Jane User';
function swap(parm) {
    return parm;
}
swap(11);
