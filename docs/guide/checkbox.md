# Checkbox

> 多选框，可配置禁用、选中状态，可自定义样式

## 效果
![效果展示](http://pji4lsgkc.bkt.clouddn.com/image-1544519713315-V2VjaGF0SU1HMTcucG5n.png)

## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name='quist-checkbox' src='@quist-ui/quist-checkbox/index'></import>
```

## 例子

#### 基础(绑定change事件)

```js{4}
<quist-checkbox values="{{data1.values}}" options="{{data1.options}}" @on-change="callback"></quist-checkbox>
```

#### 自定义样式

```js{4}
<quist-checkbox values="{{data2.values}}" checked="{{data2.checked}}" options="{{data2.options}}" checked-color='red' checked-border-color='red' is-right></quist-checkbox>
```

更详细代码可以参考 [quist-checkbox demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Checkbox/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| values | 初始选中项 | `Array` | [] |
| options | 选项 | `Array` | [] |
| label-color | 标签颜色 | `String` | #000000 |
| check-color | 未选中状态选择框背景颜色 | `String` | #FFFFFF |
| checked-color | 选中状态选择框背景颜色 | `String` | #2998F9 |
| check-border-color| 未选中状态选择框颜色 | `String` | #CACBCC |
| checked-border-color| 选中状态选择框颜色 | `String` | #2998F9 |
| is-right| 选择框是否在右侧 | `Boolean` | false |
| label-style | 标签样式覆盖入口 | `Object` | {} |
| wrapper-style | 外层样式覆盖入口 | `Object` | {} |
| inner-style | 内层样式覆盖入口 | `Object` | {} |
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

#### v1.1.0 (2018-11-19)
* [优化] 优化样式传递方式