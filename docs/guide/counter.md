# Counter

> 计数器组件


## 安装

```js{4}
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name='quist-counter' src='@quist-ui/quist-counter/index'></import>
```

## 例子

#### 默认计数器展示

```js{4}
<quist-counter value="{{1}}" @on-change="valueChange"></quist-counter>
```

#### 禁止更改计数器展示

```js{4}
<quist-counter value="{{10}}" disabled></quist-counter>
```

#### 设置最大值的计数器展示(最大值为10)

```js{4}
<quist-counter value="{{3}}" max="{{10}}" @on-change="valueChange"></quist-counter>
```

#### 设置最小值的计数器展示(最小值为2)

```js{4}
<quist-counter value="{{1}}" min="{{2}}" @on-change="valueChange"></quist-counter>
```

#### 自定义计数器样式

```js{4}
<quist-counter value="{{1}}" @on-change="valueChange" width="{{200}}" height="{{60}}" bg-color="#f8f8f8" border-radius="{{1}}" disabled-color="#E64340" border-color="#1890ff" f-color="#1890ff" f-size="{{48}}"></quist-counter>

更详细代码可以参考 [quist-counter demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Counter/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 当前数值 | `Number` | 0 |
| width | 整体的宽度 | `Number` | 240 |
| height | 整体的高度 | `Number` | 80 |
| border-color | 边框的颜色 | `String` | #d9d9d9 |
| border-radius | 圆角大小`建议不要设置0或超过6的值` | `Number` | 6 |
| bg-color | 加减按钮的背景颜色 | `String` | #f3f2f8 |
| f-color | 加减按钮及中间数字的颜色 | `String` | #666666 |
| f-size | 加减按钮及中间数字的大小 | `Number` | 32 |
| disabled-color | 禁用状态时，加减按钮及中间数字的颜色 | `String` | #cccccc |
| min | 最小值 | `Number` | 0 |
| max | 最大值 | `Number` | - |
| disabled | 是否禁用 | `Boolean` | false |
| on-change | 变化回调 | `Function` | - |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.0.9（2018-11-12）
* [优化] 可自定义样式，计数器的宽高、边框颜色、圆角大小、加减号按钮的背景色、字体大小、字体颜色、禁用时的字体颜色。
* 删除计数器中间可输入的功能。
