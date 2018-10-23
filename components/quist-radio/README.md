# Radio

> 单选框，可自定义样式


## 安装

```
$ npm install quist-ui -g
```

## 引入
```ux
<import name='quist-radio' src='@quist-ui/quist-radio/index'></import>
```

## 例子

#### 基础(绑定onChange事件)

```ux
<quist-radio value='apple' options="{{data}}" @on-change="callback"></quist-radio>
```

#### 自定义样式

```ux
<quist-radio thumb-checked-color='red' checked-border-color='red' is-right options="{{data1}}" value="{{value1}}" @on-change="callback1"></quist-radio>
```

更详细代码可以参考 [quist-radio demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Radio/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 初始选中项 | `String` | - |
| options | 选项 | `Array` | [] |
| label-color | 标签颜色 | `String` | #000000 |
| check-color| 未选中状态颜色 | `String` | #CCCCCC |
| checked-color| 选中状态颜色 | `String` | #2998F9 |
| is-right| 选择框是否在右侧 | `Boolean` | false |
| on-change| 变化时回调函数 | `Function` | - |

## Options属性
> options是一对象的集合

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| label | 选项标签 | `String` | - |
| value | 选项值 | `String` | - |
| disabled | 是否禁止操作 | `Boolean` | - |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
