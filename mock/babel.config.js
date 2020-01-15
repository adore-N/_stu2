module.exports = {
  presets: [
    '@vue/app',
    // ["env", { "modules": false }
    // ]
  ],
  // 'plugins': [
  //   [
  //     "component",
  //     {
  //       "libraryName": "element-ui",
  //       "styleLibraryName": "theme-chalk"
  //     }
  //   ]
  // ]
};

/*
* element UI 按需引入
* npm install babel-plugin-component -D
* npm install babel-preset-env -D
* .babelrc文件 | .babel.config.js文件
* {
          "presets": [["env", { "modules": false }]],
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
* */