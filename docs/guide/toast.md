# Toast

> 提示，提供自定义图标与自定义时长，可自定义样式

## 效果
![效果展示](http://pji4lsgkc.bkt.clouddn.com/image-1544519628577-V2VjaGF0SU1HMjIucG5n.png)

## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-toast" src="@quist-ui/quist-toast/index"></import>
```

## 例子

#### 提示

```js{4}
视图
<input type="button" value="demo" @click="showToast({{type}})" />
方法
showToast(type) {
  this.toast.show(this[type])
}
```

> type对象支持三种形式

* info
* custom
* duration

更详细代码可以参考 [quist-toast demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Toast/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| text | 提示内容 | `String` | - |
| img | 自定义展示图片(传入图片路径) | `String` | - |
| duration | 自定义显示时长(单位ms) | `Number` | 500(ms) |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
