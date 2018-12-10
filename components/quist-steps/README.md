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

#### 横向步骤条

```js{4}
<quist-steps steps="{{steps}}" current="{{3}}"></quist-steps>
```

#### 纵向步骤条

```js{4}
<quist-steps steps="{{steps}}" current="{{2}}" direction="vertical"></quist-steps>
```

#### 自定义图标、颜色

```js{4}
<quist-steps steps="{{steps}}" current="{{1}}" icon="/Common/img/check.png" default-color="#87d068"></quist-steps>
```

#### 自定义标题、描述

```js{4}
<quist-steps steps="{{steps}}" current="{{2}}" default-color="#fac450" active-color='#87d068' title-style="{{titleStyle}}" desc-style="{{descStyle}}"></quist-steps>
```

更详细代码可以参考 [quist-button demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Steps/index.ux)

## API 
| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| steps | 步骤 | `Array` | [] |
| current | 指定当前步骤 | `Number` | 0 |
| direction | 步骤条方向。目前支持水平(horizontal)和竖直(vertical)两种方向 | `String` | horizontal |
| icon | 当前已执行步骤图标(传递图片路径) | `String` |  |
| active-color | 当前已执行步骤颜色(自定义图片代表背景色, 默认实心点代表字体颜色) | `Object` | {} |
| default-color | 默认步骤条颜色(自定义图片代表背景色, 默认实心点代表字体颜色) | `Object` | {} |
| title-style | 标题样式(可以自定义大小、颜色) | `Object` | {} |
| desc-style | 描述样式(可以自定义大小、颜色) | `String` |  |
| icon-style | 自定义图片底板样式 | `Object` | {} |
| line-style | 步骤线条样式 | `Object` | {} |
| dot-style | 默认实心点样式(可自定义大小、颜色) | `Object` | {} |

## steps属性
> steps是一对象的集合

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| title | 标题 | `String` | |
| desc | 描述 | `String` | |

```js{4}
示例
 [{
    title: '步骤',
    desc: '这是一个描述'
  }, 
  ...
  ]
```


## 更新日志

#### v1.1.1（2018-12-03）
* 新增 `Steps` 组件

#### v1.1.2 (2018-12-10)
* [优化] 修改默认样式
