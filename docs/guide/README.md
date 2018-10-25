### 在线体验

通过下面的二维码，可以在手机中体验 Quist-UI (请使用快应用调试器扫码)：

![](http://pfrg4qq0y.bkt.clouddn.com/5baf2aa4N0ccc8797.png)

### 安装  
`$ npm install quist-ui -D` 或 `$ yarn add quist-ui --dev`


### 配置
> 如果是在已有项目安装，请按如下代码配置webpack
```js{4}
var path = require('path')
module.exports = {
  postHook: function(webpackConf, options){
    webpackConf.resolve.alias = Object.assign(webpackConf.resolve.alias || {}, {
      '@quist-ui': path.join(process.cwd(), 'node_modules/quist-ui/components')
    })
  }
}
```

### 本地体验  
> 此操作适用于在没有项目的基础上进行安装
1. Clone Quist-UI 仓库到本地
2. 安装依赖 `$ npm install`
3. 在 quist-ui 根目录下执行 `$ npm run watch`
4. 在 quist-ui 根目录下执行 `$ npm run server`
5. Done~


### 反馈沟通

请扫码进入微信群，此群可快速及时地解答问题。

![群二维码](http://pfrg4qq0y.bkt.clouddn.com/1022.jpeg)


