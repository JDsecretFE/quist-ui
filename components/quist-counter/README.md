# Counter

> 计数器组件


## 安装

```
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
<quist-counter value="{{1}}" @on-change="valueChange" number-border-color="transparent" number-bg-color="transparent" border-radius="{{60}}" min="{{1}}" max="{{5}}"></quist-counter>
```

更详细代码可以参考 [quist-counter demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Counter/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 当前数值 | `Number` | 1 |
| operate-width | 加减按钮的宽度 | `Number` | 60 |
| operate-border-color | 加减按钮的边框颜色 | `String` | #f7f7f7 |
| border-radius | 加减按钮的圆角大小 | `Number` | 0 |
| operate-bg-color | 加减按钮的背景颜色 | `String` | #f7f7f7 |
| operate-font-color | 加减按钮的颜色 | `String` | #999999 |
| operate-font-size | 加减按钮的大小 | `Number` | 36 |
| number-width | 数字区域的宽度 | `Number` | 70 |
| number-border-color | 数字区域的边框颜色 | `String` | #f7f7f7 |
| number-bg-color | 数字区域的背景颜色 | `String` | #f7f7f7 |
| number-font-color | 数字区域的文字颜色 | `String` | #333333 |
| number-font-size | 数字区域的文字大小 | `Number` | 32 |
| height | 加减按钮及数字区域的高度 | `Number` | 60 |
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

#### v1.1.1（2018-12-03)  
* [优化] 修改默认样式