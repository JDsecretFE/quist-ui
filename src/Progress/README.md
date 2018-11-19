# Progress

> 展示操作的当前进度。


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-progress" src="@quist-ui/quist-progress/index"></import>
```

## 例子

#### 默认样式：

```js{4}
<quist-progress percent="{{10}}"></quist-progress>
```

#### 自定义进度条颜色：

```js{4}
<quist-progress percent="{{20}}" stroke-color="#52c41a"></quist-progress>
```

#### 不显示提示信息：

```js{4}
<quist-progress percent="{{40}}" show-info="{{false}}"></quist-progress>
```

#### 自定义进度条高度：

```js{4}
<quist-progress percent="{{60}}" stroke-height="{{20}}"></quist-progress>
```

#### 自定义进度条圆角大小：

```js{4}
<quist-progress percent="{{80}}" border-radius="{{6}}"></quist-progress>
```


更详细代码可以参考 [quist-progress demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Progress/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| percent | 百分比 | `Number` | 0 |
| show-info | 是否显示进度数值 | `Boolean` | true |
| stroke-color | 进度条的颜色 | `String` | #1890ff |
| stroke-height | 进度条的高度 | `Number` | 32 |
| border-radius | 进度条的圆角大小| `Number` | 20 |


## 更新日志

#### v1.0.6（2018-10-25)  
* 新增 `Progress` 组件
