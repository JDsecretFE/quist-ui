# Quist-UI

快应用UI组件库，简洁，易用，高效

### 在线体验  

通过下面的二维码，可以在手机中体验 Quist-UI (请使用快应用调试器扫码)：

![体验二维码](https://camo.githubusercontent.com/1637de016a1e70707c8715716c496aa4cd3383e4/687474703a2f2f7066726734717130792e626b742e636c6f7564646e2e636f6d2f35626166326161344e30636363383739372e706e67)


### 安装  
`$ npm install quist-ui -D` 或 `$ yarn add quist-ui --dev`


### 配置
> 如果是在已有项目安装，创建一个webpack.config.js文件(在根目录下，创建一个config文件夹，然后把此文件放入config文件夹下)，并添加如下配置

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
    - [步骤条 steps](https://jdsecretfe.github.io/quist-ui/guide/steps.html)
- 表单组件
    - [按钮 button](https://jdsecretfe.github.io/quist-ui/guide/button.html)
    - [多选框 checkbox](https://jdsecretfe.github.io/quist-ui/guide/checkbox.html)
    - [单选框 radio](https://jdsecretfe.github.io/quist-ui/guide/radio.html)
    - [开关 switch](https://jdsecretfe.github.io/quist-ui/guide/switch.html)
    - [输入框 input](https://jdsecretfe.github.io/quist-ui/guide/input.html)
    - [评分 rate](https://jdsecretfe.github.io/quist-ui/guide/rate.html)
    - [滑动输入条 slider](https://jdsecretfe.github.io/quist-ui/guide/slider.html)
- 功能组件
    - [计数器 counter](https://jdsecretfe.github.io/quist-ui/guide/counter.html)
    - [加载 loading](https://jdsecretfe.github.io/quist-ui/guide/loading.html)
    - [轮播图 swiper](https://jdsecretfe.github.io/quist-ui/guide/swiper.html)
    - [列表索引 indexlist](https://jdsecretfe.github.io/quist-ui/guide/indexlist.html)
    - [选择器 picker](https://jdsecretfe.github.io/quist-ui/guide/picker.html)
    - [滑动输入条 slider](https://jdsecretfe.github.io/quist-ui/guide/slider.html)
- 提示反馈
    - [抽屉 drawer](https://jdsecretfe.github.io/quist-ui/guide/drawer.html)
    - [提示 toast](https://jdsecretfe.github.io/quist-ui/guide/toast.html)
    - [对话框 dialog](https://jdsecretfe.github.io/quist-ui/guide/dialog.html)


### 反馈沟通

请扫码进入微信群，此群可快速及时地解答问题。

![微信沟通群二维码](https://camo.githubusercontent.com/b647122264751c224717381228181015294e5c8f/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f3230313930313231303933343536332e6a706567)


### 开源协议  

本项目基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。
