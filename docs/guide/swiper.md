# Swiper

> 滑块视图容器

## 效果
![效果展示](http://pji4lsgkc.bkt.clouddn.com/image-1544412444172-V2VjaGF0SU1HMy5wbmc=.png)

## 安装

```js{4}
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-swiper" src="@quist-ui/quist-swiper/index"></import>
```

## 例子

#### 默认样式

```js{4}
<quist-swiper visible="{{true}}" options="{{imageList}}" @on-click="choose"></quist-swiper>
```

#### 不轮询播放

```js{4}
<quist-swiper visible="{{true}}" is-loop="{{false}}" options="{{imageList}}" @on-click="choose"></quist-swiper>
```

#### 自定义当前索引和非当前索引的背景色

```js{4}
<quist-swiper visible="{{true}}" options="{{imageList}}" @on-click="choose" selected-color="#ff0000" indicator-color="#fac450"></quist-swiper>
```

#### 自动轮播且轮播时间设置为5s

```js{4}
<quist-swiper visible="{{true}}" is-auto-play="{{true}}" time="{{5000}}" options="{{imageList}}" @on-click="choose"></quist-swiper>
```

#### 蒙层形式展示轮播图

```js{4}
<quist-swiper visible="{{swiperBig}}" type="pop" options="{{imageList}}" @on-click="close"></quist-swiper>
```

#### 自定义蒙层背景颜色

```js{4}
<quist-swiper visible="{{swiperBigb}}" background="rgba(255, 255, 255, 1)" pop-pagination-color="#000000" type="pop" options="{{imageList}}"></quist-swiper>
```


更详细代码可以参考 [quist-swiper demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Swiper/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| visible | Swiper 是否可见 | `Boolean` | false |
| is-auto-play | 是否自动播放 | `Boolean` | false |
| is-loop | 是否轮询播放 | `Boolean` | true |
| time | 自动播放的时间 | `Number` | 3000 |
| options | 轮播的模块 | `Array` | - |
| show-indicator | 是否显示indicator | `Boolean` | true |
| indicator-color | indicator的颜色 | `String` | #E1E1E1 |
| selected-color | indicator当前的颜色 | `String` | #1890ff |
| type | Swiper 展示的形式(当需要以蒙层形式展示时，务必传`pop`) | `String` | ' ' |
| background | 以蒙层形式展示时的背景色 | `String` | rgba(0, 0, 0, 1) |
| pop-pagination-color | 以蒙层形式展示时的索引文字颜色 | `String` | #ffffff |
| on-click | 点击当前轮播的回调 | `Function` | - |

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.0.9（2018-11-12）
* 更新了 `Swiper` 的展示形式及索引的样式
