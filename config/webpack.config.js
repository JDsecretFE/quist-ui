var path = require('path')

module.exports = {
  postHook: function(webpackConf, options){
    webpackConf.resolve.alias = {
      '@quist-ui': path.join(process.cwd(), 'components')
    }
  }
}