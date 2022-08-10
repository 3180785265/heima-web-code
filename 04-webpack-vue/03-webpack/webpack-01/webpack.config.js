const path = require('path');

module.exports = {
  //1.用来指定构建模式,
  // development: 开发模式进行构建：转化的代码不会进行压缩与混淆，但会解决比如js的兼容性问题(时间短)
  //production：发布上线模式：进行构建会对转换的代码压缩与混淆(时间长)

  mode: "development",

  // 2.设置打包的入口与出口

  entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
  output: { // 出口
    path: path.resolve(__dirname, './dist'), //输出文件的存放路径
    filename: 'bundle.js',

  },
/*   // 3.安装打包css文件，所需要的loader
  module: {//配置所有第三方loader模塊
    // 第三方模塊的規則設置
    rules: [
      // 1  .其中test表示匹配的文件类型为.css后缀的文件
      // 2. use数组中执行的是loader, loader的顺序必须是固定的,不能颠倒
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  }, */




  // 4.配置自动打包的相关参数
  devServer: {
    static: "./",
    open: true,//打包完成之后自动打开浏览器页面
    host: '127.0.0.1',//打包后项目的ip地址
    port: 80 //打包后项目的端口号
  }


}

/* 1.
   development: 开发模式进行构建：转化的代码不会进行压缩与混淆，但会解决比如js的兼容性问题(时间短)
   production：发布上线模式：进行构建会对转换的代码压缩与混淆(时间长)
 
   只有项目上线了才用p模式
   
   
   
   2.     //定义入口和出口
   "entry": ""

   3.设置打包的入口和出口
    entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
    output: { // 出口
      path: path.join(__dirname, './dist'), //输出文件的存放路径
      filename: 'bundle.js',
    },
   
*/