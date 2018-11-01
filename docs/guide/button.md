# Button

> 按钮组件，提供了通栏和非通栏两种大小，可自定义样式


## 安装

```js{4}
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name='quist-button' src='@quist-ui/quist-button/index'></import>
```

## 例子

#### 不同颜色

```js{4}
<quist-button type="primary" value="Primary"></quist-button>

<quist-button type="default" value="default"></quist-button>

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

#### 自定义样式按钮

```js{4}
<quist-button value="自定义样式按钮" bg-color="#fac450" f-color="#ffffff" f-size="{{42}}" width="{{400}}" height="{{120}}" border-radius="{{0}}" border-color="#E64340"></quist-button>
```

更详细代码可以参考 [quist-button demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Button/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 按钮的文字 | `String` | 确定 |
| border-color | 按钮的边框颜色 | `String` | #d9d9d9 |
| border-radius | 按钮的圆角大小 | `Number` | 6 |
| bg-color | 按钮的背景色 | `String` | #ffffff |
| width | 按钮的宽度 | `Number` | 200 |
| height | 按钮的高度 | `Number` | 80 |
| f-size | 按钮文字的大小 | `Number ` | 32 |
| f-color | 按钮文字的颜色 | `String` | #666666 |
| type | 设置按钮类型，可选值为 `primary` `default` `danger` | `String` | - |
| block | 将按钮宽度调整为其父宽度的选项 | `Boolean` | false |
| disabled | 是否禁用 | `Boolean` | false |
| on-click | `click` 事件的 handler | `Function` | - |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.0.8（2018-11-01）
* [优化] 可自定义按钮的大小、颜色、边框、圆角及按钮文字大小、颜色
