/*
* 创建一个名字必须是vue.config.js的文件
* 这里添加或者修改自定义配置
* 最后会把这个文件和默认配置进行增量覆盖
* */
const path = require('path')

function resolve(dir) { // 声明一个函数,调用函数的时候传入相对路径
  return path.join(__dirname, dir) // return绝对路径
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      // .set('路径别名', resolve('vue.config文件的相对路径'))
      .set('components', resolve('./src/components'))
      .set('src', resolve('./src'))
      .set('@', resolve('./src'))
      .set('utils', resolve('./src/utils'))
  }
}
