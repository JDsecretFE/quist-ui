var path = require('path')

module.exports = {
  postHook: function(webpackConf, options){
    var rules = webpackConf.module.rules;
    var extensions = webpackConf.resolve.extensions;
    webpackConf.resolve.alias = {
      '@quist-ui': path.join(process.cwd(), 'components'),
      '@style': path.join(process.cwd(), 'style')
    }
  }
}