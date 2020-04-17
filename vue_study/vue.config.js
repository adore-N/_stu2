// const path = require("path");

// 代理配置
module.exports = {
    lintOnSave: false, //禁用eslint
    // productionSourceMap: false,  // 生产环境的 source map
    // outputDir:process.env.outputDir, //根据不同环境打包输出不同文件夹
    // pages:getEntry('./src/pages/**/*.js'),
    // devServer: {
    //     // index: "login.html", //默认启动serve 打开login页面
    //     open:false, // 执行npm run serve 字动打开浏览器
    //     host:'dev.58xiaoxiang.top',
    //     port: 8089,
    //     proxy:{
    //         '/v1':{
    //             target:'http://localhost:3333',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/v1': '/v1'
    //             }
    //         }
    //     }
    // },
    // chainWebpack:config=>{
    //     config.output.filename('[name].[hash:7].js').end();
    // }
};
