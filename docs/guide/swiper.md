# Swiper

> 滑块视图容器


## 安装

```js{4}
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-swiper" src="@quist-ui/quist-swiper/index"></import>
```

## 例子

#### 显示幻灯片(无indicator)

```js{4}
<quist-swiper show-indicator="{{false}}" options="{{imageList}}" @qui-swiper-click="choose"></quist-swiper>
```

#### 显示幻灯片(特定indicator样式)

```js{4}
<quist-swiper indicator-color='rgba(0, 0, 0, 1)' indicator-selected-color='#ff0000' indicator-size='40px' options="{{imageList}}" @on-click="choose">
</quist-swiper>
```

#### 自动播放(自定义播放时间)

```js{4}
<quist-swiper is-auto-play="{{true}}" time="{{5000}}" options="{{imageList}}" @on-click="choose"></quist-swiper>
```


更详细代码可以参考 [quist-swiper demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Swiper/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| show-indicator | 是否显示indicator | `Boolean` | true |
| visible | Swiper 是否可见 | `Boolean` | false |
| is-auto-play | 是否自动播放 | `Boolean` | false |
| time | 自动播放的时间 | `Number` | 3000 |
| options | 轮播的模块 | `Array` | - |
| indicator-color | indicator的颜色 | `String` | rgba(0, 0, 0, 0.5) |
| indicator-selected-color | indicator当前的颜色 | `String` | #33b4ff |
| indicator-size | indicator的大小 | `String` | 20px |
| on-click | 点击当前轮播的回调 | `Function` | - |

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
