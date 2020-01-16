# mock

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Element UI 按需引入
```
npm install babel-plugin-component -D
npm install @babel/preset-env -D
* .babelrc文件 | .babel.config.js文件
* {
          "presets": [["@babel/preset-env", { "modules": false }]],
          "plugins": [
            [
              "component",
              {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
              }
            ]
          ]
        }
   import { Button, Select } from 'element-ui';
   Vue.use(Button)
   Vue.use(Select)
```

### 使用require.context()实现前端工程自动化 在 vue文件夹中具体实现
```
 webpack 的 require.context(): 可以检测某一个文件夹内匹配的文件
 require.context(arg1,arg2,arg3)  
 arg1: 需要检测的文件夹  arg2: 是否深度检测(包括子文件夹)  arg3: (正则)匹配文件夹的规则
```

### 注意
在使用elementUI 和 require.context() 时会出现问题,需要修改对应的依赖babel系列,需要版本正确的babel系列
要不然会报错,导致require.context报错,同时,还需要修改对应的配置文件.babel.config.js
 
### vue中路由按需加载的几种方法
1.使用动态的import()语法
```
//没有指定webpackChunkName,每个组件打包成一个js文件
const test1 = ()=>import('@/components/test1.vue') 
const test2 = ()=>import('@/components/test2.vue')

//指定了相同的webpackChunkName，会合并打包成y一个js文件
const test3 = ()=>import(/* webpackChunkName:'grounpTest' */ '@/components/test3.vue') 
const test4 = ()=>import(/* webpackChunkName:'grounpTest' */ '@/components/test4.vue')

const router = new VueRouter({
    routes: [
        { path: '/test1', component: test1 },
        { path: '/test2', component: test2 },
        { path: '/test3', component: test3 },
        { path: '/test4', component: test4 }
    ]
 })
注: /* webpackChunkName: 'grounpTest' */使用命名chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)
```
2.vue异步组件技术,在路由中配置,实现按需加载,一个组件生成一个js文件
```
{
path: '/home',
name: 'home',
component:resove => require(['@/components/home'],resolve)
}
```