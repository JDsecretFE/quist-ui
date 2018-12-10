# Input

> 输入框，可附带前缀、后缀图标, 可设置禁用状态，可自定义样式


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name='quist-input' src='@quist-ui/quist-input/index'></import>
```

## 例子

#### 默认输入框

```js{4}
<quist-input placeholder='请输入关键字'></quist-input>
```

#### 带后缀的输入框

```js{4}
<quist-input placeholder='请输入关键字' suffix="{{suffix}}"></quist-input>
```

#### 带前缀的输入框

```js{4}
<quist-input placeholder='请输入关键字' prefix="{{prefix}}" suffix="{{suffix}}"></quist-input>
```

#### 禁用状态的输入框

```js{4}
<quist-input placeholder='请输入关键字' disabled></quist-input>
```

更详细代码可以参考 [quist-input demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Input/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 输入框内容 | `String` | - |
| type | 输入框类型(目前支持 `text` `number` `password` `phone(电话号码)` `bankCard(银行卡号)` `amount(金额)` | `String` | text |
| placeholder | 占位 | `String` | - |
| disabled | 是否禁用 | `Boolean` | false |
| autofocus | 是否自动获取焦点 | `Boolean` | false |
| prefix | 带有前缀图标的input | `String` | - |
| suffix | 带有后缀图标的input | `String` | - |
| icon-style | 图标样式覆盖入口 | `Object` | {} |
| wrapper-style | 外层样式覆盖入口 | `Object` | {} |
| input-style | 输入框样式覆盖入口 | `Object` | {} |
| on-change | 监测数据改变事件 | `function` | - |

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.1.0 (2018-11-19)
* [优化] 优化样式传递方式
* [优化] 添加on-change事件
* [优化] 删除on-focus、on-blur、on-clear事件
* [优化] 添加value属性,与on-change事件结合动态改变数据

#### v1.1.2 (2018-12-10)
* [优化] 修改默认样式
* [优化] 添加type、disabled属性
