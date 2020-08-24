function greeter(person: string) {
    return 'hello' + person
}

/**
 * 这里如果对于形参不定义类型，就会报错，这里和配置文件有关
 * 加上之后函数的自动会加上返回值的类型，这就是ts的自带的类型推导
 */

const user = 'Jane User'

function swap<T>(parm: T): T{
    return parm;
}

swap(11)

function fn<T>(parm: Array<T>){
    console.log(parm.length);
    return parm;
}

fn([1,2,3])

function getvalue<T extends Object, U extends keyof  T>(obj: T, key: U) {
    return obj[key]
}

const a = {
    name: '11',
    age: 12
}

getvalue(a,"age")