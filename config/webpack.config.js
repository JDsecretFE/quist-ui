var path = require('path')

module.exports = {
  postHook: function(webpackConf, options){
<<<<<<< HEAD
    webpackConf.resolve.alias = Object.assign(webpackConf.resolve.alias || {}, {
      '@quist-ui': path.join(process.cwd(), 'components')
    })
=======
    webpackConf.resolve.alias = {
      '@quist-ui': path.join(process.cwd(), 'components')
    }
>>>>>>> new
  }
}