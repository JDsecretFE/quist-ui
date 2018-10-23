# Loading

> 滑块视图容器


## 安装

```
$ npm install quist-ui -g
```

## 引入
```ux
<import name="quist-loading" src="@quist-ui/quist-loading/index"></import>
```

## 例子

#### 显示图标

```ux
<quist-loading tip="{{tip}}">
  <image src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524124238403.gif" />
</quist-loading>
```

#### 不显示图标

```ux
<quist-loading tip="{{tip}}"></quist-loading>
```

#### 不显示蒙层

```ux
<quist-loading visible="{{visible}}" tip="{{tip}}" background="rgba(0, 0, 0, 0)">
  <image src="http://www.sucaijishi.com/uploadfile/2014/0524/20140524124238403.gif" />
</quist-loading>
```

更详细代码可以参考 [quist-loading demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Loading/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| visible | Loading 是否可见 | `Boolean` | false |
| tip | 显示的提示文字 | `String` | - |
| background | 是否显示蒙层 | `String` | rgba(0, 0, 0, 0) |

## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
