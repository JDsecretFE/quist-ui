# Slider

> 滑动型输入器，可展示当前值和可选范围。

## 效果
![效果展示](http://pji4lsgkc.bkt.clouddn.com/image-1544412591613-V2VjaGF0SU1HOS5wbmc=.png)

## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-slider" src="@quist-ui/quist-slider/index"></import>
```

## 例子

#### 默认样式：

```js{4}
<quist-slider @on-change="slide()"></quist-slider>
```

#### 传入默认值：

```js{4}
<quist-slider @on-change="slide()" value="{{20}}"></quist-slider>
```

#### 最小值50-最大值230：

```js{4}
<quist-slider @on-change="slide()" min="{{50}}" max="{{230}}" value="{{140}}"></quist-slider>
```

#### 禁用状态：

```js{4}
<quist-slider disabled value="{{30}}"></quist-slider>
```

#### 自定义样式：

```js{4}
<quist-slider @on-change="slideB()" slider-bgcolor="#cccccc" track-color="#fac450" height="{{8}}" handle-size="{{60}}" handle-bg-color="#87d068" handle-border-color="#E64340"></quist-slider>
```

#### 显示数值：

```js{4}
<div class="slider">
  <text>0</text>
  <div class="slider-info">
    <quist-slider @on-change="slideE()" width="{{560}}"></quist-slider>
  </div>
  <text>100</text>
</div>
```

更详细代码可以参考 [quist-slider demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Slider/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| min | 最小值 | `Number` | 0 |
| max | 最大值 | `Number ` | 100 |
| value | 设置当前取值 | `Number ` | 0|
| height | 滑动条的高度，单位`px` | `Number ` | 4 |
| width | 滑动条的高度，单位`px` | `Number` | 660 |
| track-color | 选中部分滑动条的样式 | `String` | #1890ff |
| slider-bgcolor | 未选中部分 | `String` | #E9E9E9 |
| handle-size| 滑块的大小 | `Number ` | 50 |
| handle-bg-color | 滑块的背景颜色 | `String` | rgba(255, 255, 255, 1) |
| handle-border-color | 滑块的边框颜色 | `String` | #1890ff |
| disabled | 是否禁用 | `Boolean ` | false |
| on-change | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 | `Function ` | - |


## 更新日志

#### v1.1.2（2018-12-10)  
* 新增 `Slider` 组件，平台版本1030以上支持。

