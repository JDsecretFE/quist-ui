# CityPicker

> 城市选择器


## 安装

```
$ npm install quist-ui -g
```

## 引入
```js{4}
<import name='quist-cityPicker' src='@quist-ui/quist-cityPicker/index'></import>
```

## 例子

#### 基础

```js{4}
<quist-cityPicker data-source="{{dataSource}}" hot-city="{{hotCity}}" @on-click="onClick"></quist-cityPicker>
```

更详细代码可以参考 [quist-cityPicker demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/CityPicker/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| data-source | 数据源 | `Array` | [] |
| hot-City | 热门城市数据 | `Array` | [] |
| on-click| 选中时时回调函数 | `Function` | - |

## dataSource属性
> data-source是一对象的集合

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| letter | 首字母 | `String` | - |
| cities | 城市列表 | `Array` | - |
> 详细参数可以参考  [quist-cityPicker demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/CityPicker/data.js)

## hotCity属性
> hot-city是一对象的集合

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| cityName | 城市名称 | `String` | - |
> 详细参数可以参考  [quist-cityPicker demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/CityPicker/data.js)

> data-source中cities和hot-city都必须包含cityName这个属性

## 更新日志

#### v1.0.5（2018-10-23）
* 添加`CityPicker`组件
