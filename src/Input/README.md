# Input

> 输入框，可附带前缀、后缀图标, 可设置禁用状态，可自定义样式


## 安装

```
$ npm install quist-ui -g
```

## 引入
```ux
<import name='quist-input' src='@quist-ui/quist-input/index'></import>
```

## 例子

#### 默认输入框

```ux
<quist-input placeholder='请输入关键字'></quist-input>
```

#### 带后缀的输入框

```ux
<quist-input placeholder='请输入关键字' suffix="{{suffix}}"></quist-input>
```

#### 带前缀的输入框

```ux
<quist-input placeholder='请输入关键字' prefix="{{prefix}}" suffix="{{suffix}}"></quist-input>
```

#### 禁用状态的输入框

```ux
<quist-input placeholder='请输入关键字' disabled></quist-input>
```

更详细代码可以参考 [quist-input demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Input/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| placeholder | 占位 | `String` | - |
| prefix | 带有前缀图标的input | `String` | - |
| suffix | 带有后缀图标的input | `String` | - |
| on-focus | 获取焦点事件 | `function` | - |
| on-blur | 失去焦点事件 | `function` | - |
| on-clear | 清空输入内容事件 | `function` | - |

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
