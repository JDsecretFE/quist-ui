# Indexlist

> 列表索引


## 安装

```
$ npm install quist-ui -D
```

## 引入
```ux
<import name='quist-indexlist' src='@quist-ui/quist-indexlist/index'></import>
```

## 例子

#### 基础

```ux
<quist-indexlist data-source="{{dataSource}}" hot-city="{{hotCity}}" @on-click="onClick"></quist-indexlist>
```

更详细代码可以参考 [quist-indexlist demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Indexlist/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| data-source | 数据源 | `Array` | [] |
| title | 标题 | `String` | - |
| current | 当前定位 | `String` | - |
| hot-title | 热门标题 | `String` | - |
| hot-item | 热门数据源 | `Array` | [] |
| type | 需要展示字段的名称 | `String` | - |
| on-click| 选中时时回调函数 | `Function` | - |

## dataSource属性
> data-source是一对象的集合

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| letter | 首字母 | `String` | - |

```ux
示例
 [{
    "letter": "A",             // 固定字段
    "cities": [{               // 此字段名称可以自己定义, 但必须为数组
      "cityCode": 210300,
      "cityName": "鞍山",      // 此字段通过type属性传递到组件中, 可以自己定义
      "parentId": 3606677,
      "pinyin": "ANSHAN"
    }]
  }, 
  ...
  ]
```
> 详细参数可以参考  [quist-indexlist demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Indexlist/data.js)

## hotItem属性
> hot-item是一对象的集合

```ux
示例
 [{
    cityName: '北京',    // 此字段通过type属性传递到组件中, 可以自己定义
    code: 110000
  },
  ...
  ]
```
> 详细参数可以参考  [quist-indexlist demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Indexlist/data.js)


## 更新日志

####v1.0.5（2018-10-23）
* 添加`CityPicker`组件

####v1.0.7 (2018-10-31)
* 将`CityPicker`组件名字更改为`Indexlist`, 通用性更强
* 添加`title`, `current`, `hot-item`, `type`属性, 提升组件的可扩展性
