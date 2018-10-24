# Button

> 按钮组件，提供了通栏和非通栏两种大小，可自定义样式


## 安装

```js{4}
$ npm install quist-ui -g
```

## 引入
```js{4}
<import name='quist-button' src='@quist-ui/quist-button/index'></import>
```

## 例子

#### 不同颜色

```js{4}
<quist-button type="primary" value="Primary"></quist-button>

<quist-button type="default"></quist-button>

<quist-button type="danger" value="Danger"></quist-button>
```

#### 禁用按钮

```js{4}
<quist-button disabled value="Disabled"></quist-button>
```

#### 通栏按钮

```js{4}
<quist-button type="default" block></quist-button>
```

#### 绑定 click 事件

```js{4}
<quist-button type="default" block @on-click="onClick"></quist-button>
```

更详细代码可以参考 [quist-button demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Button/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 按钮上的文字 | `String` | 确定 |
| type | 设置按钮类型，可选值为 `primary` `default` `danger` | `String` | default |
| block | 将按钮宽度调整为其父宽度的选项 | `Boolean` | false |
| disabled | 是否禁用 | `Boolean` | false |
| on-click | `click` 事件的 handler | `Function` | - |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
