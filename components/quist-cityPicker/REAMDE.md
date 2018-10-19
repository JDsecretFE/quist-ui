# CityPicker

> 多选框，可配置禁用、选中状态，可自定义样式


## 安装

```
$ npm install quist-ui -g
```

## 引入
```ux
<import name='quist-cityPicker' src='@quist-ui/quist-cityPicker/index'></import>
```

## 例子

#### 基础

```ux
<quist-cityPicker data-source="{{dataSource}}" hot-city="{{hotCity}}" @on-click="onClick"></quist-cityPicker>
```

更详细代码可以参考 [quist-cityPicker demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/CityPicker/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| data-source | 数据源 | `Array` | [] |
| hot-City | 热门城市数据 | `Array` | [] |

## dataSource属性
> options是一对象的集合

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| label | 选项标签 | `String` | - |
| value | 选项值 | `String` | - |
| disabled | 是否禁止操作 | `Boolean` | - |

## 更新日志

v1.0.0（2018-09-30）
> 初始版本
