/* 
  index.js: webpack入口起点文件

  1.运行指令: 
    开发环境: webpack ./src/index.js -o ./build/built.js --mode=development
      (webpack会以./src/index.js为入口文件开始打包, 打包后输出到./build/built.js)
    生产环境: webpack ./src/index.js -o ./build/built.js --mode=production
    生产环境和开发环境的打包之后的区别:生产环境会进行代码压缩

  2.结论：
    a : webpack能够处理JS资源,JSON资源, 不能够处理CSS/img资源
    b : 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
    c : 生产环境比开发环境多一个JS压缩代码
*/ 
// import './index.css'  //引入css资源时打包报错
import data from './data.json'
console.log(data)
function test(a,b){
  return a + b;
}
console.log(test(1,2))
