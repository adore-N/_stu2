import Home from "./Home";

// var a = require.context('../home',true,/.vue/);
// var arr = []
// a.keys().forEach(key=>{
//     console.log(key)
//     var _arr = key.split('.')
//     console.log(_arr)
//     // ['','mode1','index','vue]
//     if(key.indexOf('index') != -1){
//         arr.push({
//             path: _arr[1],
//             component: a(key).default
//         })
//     }else {
//         arr.push({
//             path: _arr[1] + '/' + _arr[2],
//             component: a(key).default
//         })
//     }
// })


export default [
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]