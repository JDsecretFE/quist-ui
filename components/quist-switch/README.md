# Switch

> 开关，可自定义样式


## 安装

```
$ npm install quist-ui -g
```

## 引入
```ux
<import name='quist-switch' src='@quist-ui/quist-switch/index'></import>
```

## 例子

#### 默认开关

```ux
<quist-switch checked></quist-switch>
```

#### 禁用开关

```ux
<quist-switch disabled checked="{{false}}"></quist-switch>
```

#### 自定义样式开关

```ux
<quist-switch checked="{{false}}" checked-color="red"></quist-switch>
```

#### 绑定 change 事件

```ux
<quist-switch checked @on-change="callback"></quist-switch>
```

更详细代码可以参考 [quist-switch demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Switch/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| checked | 指定当前是否选中 | `Boolean` | false |
| disabled | 是否禁用	 | `Boolean` | false |
| check-color | 未选中时的背景颜色 | `String` | #C1C1C1 |
| checked-color | 选中时的背景颜色 | `String` | #2998F9 |
| wrapper-style | 外层样式覆盖入口 | `Object` | {} |
| inner-style | 内层样式覆盖入口 | `Object` | {} |
| on-change | `change` 事件的 handler | `function` | - |


## 更新日志

#### v1.0.0（2018-09-30）
> 初始版本

#### v1.1.0 (2018-09-19)
* [优化] 调整样式传递方式