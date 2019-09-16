const path = require('path');
function resolve(dir) {
  console.log(path.join(__dirname, dir))
  return path.join(__dirname, dir)
};
module.exports = {
  // lintOnSave: false, //关闭整个页面的eslint检查
  productionSourceMap: false,//
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
  }
};