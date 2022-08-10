const path = require('path');
module.exports = {
  //1.用来指定构建模式,
  // development: 开发模式进行构建：转化的代码不会进行压缩与混淆，但会解决比如js的兼容性问题(时间短)
  //production：发布上线模式：进行构建会对转换的代码压缩与混淆(时间长)

  mode: "development",

  // 2.设置打包的入口与出口

  entry: path.join(__dirname, './src/index.js'), // 打包入口文件的路径
  output: { // 出口
    path: path.join(__dirname, './dist'), //输出文件的存放路径
    filename: 'bundle.js',
  },


  // 3.配置自动打包的相关参数
  // package 中的"scripts" 也可以配置命令参数  --open --host 127.0.0.1 --port 8888
  devServer: {
    static: "./",
    open: true,//打包完成之后自动打开浏览器页面
    host: '127.0.0.1',//打包后项目的ip地址
    port: 80 //打包后项目的端口号
  },



  // 3.安装打包css文件，less,scss, 和css样式表引入图片加载器  所需要的loader
  module: {
    // 1.在rules数组中配置规则
    rules: [
      // 1  .其中test表示匹配的文件类型为.css后缀的文件
      // 2. use数组中执行的是loader, loader的顺序必须是固定的,不能颠倒
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      // 2.配置 处理对 .sacss结尾的文件，用对应的加载器处理
      {
        test: /\.less$/,

        use: [
          'style-loader',  //将js中css通过创建style标签添加到html文件中生效
          'css-loader',//将css资源编译成commonjs的模块到js中
          'less-loader',  //将less编译成css文件
        ],
      },

      // 3.配置对scss的处理

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },

      { // 图片文件的配置(仅适用于webpack5版本)
        test: /\.(gif|png|jpg|jpeg)$/,//表示遇到以这些后缀为结尾的文件，就处理
        type: 'asset' // 匹配上面的文件后, webpack会把他们当做静态资源处理打包
        // 如果你设置的是asset模式
        // 以8KB大小区分图片文件
        // 小于8KB的, 把图片文件转base64, 打包进js中
        // 大于8KB的, 直接把图片文件输出到dist下
      },


      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, // 不去匹配node_modules这些文件夹下的文件的js
        use: {
          loader: 'babel-loader', // 使用这个loader处理js文件
          options: { // 加载器选项
            presets: ['@babel/preset-env'] // 预设: @babel/preset-env 降级规则-按照这里的规则降级我们的js语法
          }
        }
      }


    ]
  },


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


       // 4.配置自动打包的相关参数
  devServer: {
    static: "./",
    open: true,//打包完成之后自动打开浏览器页面
    host: '127.0.0.1',//打包后项目的ip地址
    port: 80 //打包后项目的端口号
  } 


    // 3.安装打包css文件，所需要的loader
    module: {//配置所有第三方loader模塊
      // 第三方模塊的規則設置
      rules: [
        // 1  .其中test表示匹配的文件类型为.css后缀的文件
        // 2. use数组中执行的是loader, loader的顺序必须是固定的,不能颠倒
        { test: /\.css$/, use: ['style-loader', 'css-loader'] }
      ]
    },
   
*/