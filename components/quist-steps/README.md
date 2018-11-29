# Steps

> 步骤条，提供水平和垂直两种方式，可自定义样式


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name='quist-steps' src='@quist-ui/quist-steps/index'></import>
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


steps: {
        type: Array,
        default: []
      },
      current: {
        type: Number,
        default: 0
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      placement: {
        type: String,
        default: 'right'
      },
      icon: {
        type: String,
        default: ''
      }


| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| steps | 步骤 | `Array` | [] |
| current | 指定当前步骤 | `Number` | 0 |
| direction | 步骤条方向。目前支持水平(horizontal)和竖直(vertical)两种方向 | `String` | 'horizontal' |
| icon | 当前已执行步骤图标(传递图片路径) | `String` |  |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
