# Loading

> 加载中


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-loading" src="@quist-ui/quist-loading/index"></import>
```

## 例子

#### 有图标无蒙层（默认）

```js{4}
<quist-loading visible="{{visible}}" tip="{{tip}}"></quist-loading>
```

#### 有图标有蒙层

```js{4}
<quist-loading visible="{{visible}}" tip="{{tip}}" background="rgba(0, 0, 0, 0.6)"></quist-loading>
```

#### 无图标无蒙层

```js{4}
quist-loading visible="{{visible}}" tip="{{tip}}" icon=""></quist-loading>
```

#### 自定义loading图标

```js{4}
<quist-loading visible="{{visible}}" tip="{{tip}}" icon="./loadingb.png"></quist-loading>
```

更详细代码可以参考 [quist-loading demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Loading/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| visible | Loading 是否可见 | `Boolean` | false |
| tip | 提示内容 | `String` | - |
| background | 蒙层的颜色及透明度 | `String` | rgba(0, 0, 0, 0) |
| icon | 默认的图标，如不想显示请传''值；如需显示自定义图标请传入图片路径，格式最好为`.png`格式 | `String` | 图片路径 |

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.1.1（2018-12-03)
* [优化] 修改默认样式
