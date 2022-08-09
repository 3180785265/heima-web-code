const path = require('path');
model.exports = {
    //1.用来指定构建模式,
    // development: 开发模式进行构建：转化的代码不会进行压缩与混淆，但会解决比如js的兼容性问题(时间短)
    //production：发布上线模式：进行构建会对转换的代码压缩与混淆(时间长)

    model: "development",

    // 2.设置打包的入口与出口
    entry: path.join(__dirname, './src/index.js') //path.join(__dirname, './src/index.js')表示绝对路径

    ,
    //出口
    oninput: {
        path: path.join(__dirname, './src/index.js'),//输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    }

}

/* 1.
   development: 开发模式进行构建：转化的代码不会进行压缩与混淆，但会解决比如js的兼容性问题(时间短)
   production：发布上线模式：进行构建会对转换的代码压缩与混淆(时间长)
 
   只有项目上线了才用p模式
   
   
   
   2.     //定义入口和出口
   "entry": ""
   
*/