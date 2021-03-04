/* 
  webpack.config.js  webpack的配置文件
    作用: 指示webpack 干那些活(当你运行webpack指令时,会加载里面的配置)
    所有构建工具都是基于nodejs平台运行的
*/
const { resolve } = require('path') //nodejs中内置的包,处理路径的
// 导入的path模块是nodejs的核心模块，用于操作文件的路径
module.exports = {
  entry: './src/index.js',//入口文件
  output: {
    filename:'built.js',//输出文件名
    path: resolve(__dirname, 'build') //输出路径   __dirname是nodejs的变量,代表当前文件的目录绝对路径
  },
  module: {// loader的配置
    rules: [
      {
        test: /\.css$/,//匹配识别的文件(以.css结尾的文件)
        use: [//使用哪些loader进行处理转换 ()顺序执行 //
          'style-loader',//创建style标签,将js中的样式资源插入进行,添加到header中生效
          'css-loader'//将css文件变成common.js模块加载js
        ]//告诉webpack当识别到在require或者import语句中被解析为.css文件时,打包前先usestyle-loader/css-loader进行转换
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'//将less文件编译成css文件
        ]
      }
    ]
  },
  plugins:[// 插件的配置

  ],
  mode:'development',//模式 'production'

}