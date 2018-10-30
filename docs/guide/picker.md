# Picker

> 单列选择，多列选择。


## 安装

```js{4}
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-picker" src="@quist-ui/quist-picker/index"></import>
```

## 例子

#### 单列、多列选择

```js{4}
<quist-picker visible="{{pickerVisible}}" @on-close="close()" list="{{list}}" @on-select="select()" ok-text="ok" cancel-text="cancel"></quist-picker>
```

#### 点击蒙层不关闭当前组件

```js{4}
<quist-picker visible="{{pickerVisible}}" @on-close="close()" list="{{list}}" @on-select="select()" mask-closable="{{false}}"></quist-picker>
```


更详细代码可以参考 [quist-picker demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Picker/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| mask-closable | 点击蒙层是否允许关闭 | `Boolean` | true |
| visible | Picker 是否可见 | `Boolean` | false |
| ok-text | 确定按钮文字 | `String` | 确定 |
| cancel-text | 取消按钮文字 | `String` | 取消 |
| list | 传入的数据，如需要多列显示请传入一个二维数组 | `Array` | - |
| on-close | 点击取消的回调 | `Function` | - |
| on-select | 点击确定的回调 | `Function` | - |


## 更新日志

#### v1.0.5（2018-10-23)  
* 新增 `Picker` 组件
