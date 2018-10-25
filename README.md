# Quist-UI

快应用UI组件库，简洁，易用，高效

### 在线体验  

通过下面的二维码，可以在手机中体验 Quist-UI (请使用快应用调试器扫码)：

![](http://pfrg4qq0y.bkt.clouddn.com/5baf2aa4N0ccc8797.png)


### 安装  
`$ npm install quist-ui -D` 或 `$ yarn add quist-ui --dev`


### 配置
> 如果是在已有项目安装，请按如下代码配置webpack
```
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


### 文档  

- [Quist-UI 组件库文档](https://jdsecretfe.github.io/quist-ui)
- [Quist-UI 源码地址](https://github.com/JDsecretFE/quist-ui)


### 组件列表  

- 基础组件
    - [进度条 progress](https://jdsecretfe.github.io/quist-ui/guide/progress.html)
- 表单组件
    - [按钮 button](https://jdsecretfe.github.io/quist-ui/guide/button.html)
    - [多选框 checkbox](https://jdsecretfe.github.io/quist-ui/guide/checkbox.html)
    - [单选框 radio](https://jdsecretfe.github.io/quist-ui/guide/radio.html)
    - [开关 switch](https://jdsecretfe.github.io/quist-ui/guide/switch.html)
    - [输入框 input](https://jdsecretfe.github.io/quist-ui/guide/input.html)
- 功能组件
    - [计数器 counter](https://jdsecretfe.github.io/quist-ui/guide/counter.html)
    - [加载 loading](https://jdsecretfe.github.io/quist-ui/guide/loading.html)
    - [轮播图 swiper](https://jdsecretfe.github.io/quist-ui/guide/swiper.html)
    - [城市选择器 cityPicker](https://jdsecretfe.github.io/quist-ui/guide/cityPicker.html)
    - [选择器 picker](https://jdsecretfe.github.io/quist-ui/guide/picker.html)
- 提示反馈
    - [抽屉 drawer](https://jdsecretfe.github.io/quist-ui/guide/drawer.html)
    - [提示 toast](https://jdsecretfe.github.io/quist-ui/guide/toast.html)
    - [对话框 dialog](https://jdsecretfe.github.io/quist-ui/guide/dialog.html)


### 反馈沟通  

请扫码进入微信群，此群可快速及时地解答问题。

![群二维码](http://pfrg4qq0y.bkt.clouddn.com/1022.jpeg)


### 开源协议  

本项目基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。
