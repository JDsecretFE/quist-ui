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

#### 自定义样式

```js{4}
<quist-picker visible="{{pickerVisible4}}" title-font-size="{{24}}" cancel-color="#666666" confirm-color="#87d068" item-color="#999999" item-select-color="#87d068" item-font-size="{{24}}" @on-close="close(4)" list="{{list1}}" @on-select="select4()" mask-closable="{{false}}" ok-text="ok" cancel-text="cancel"></quist-picker>
```


更详细代码可以参考 [quist-picker demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Picker/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| mask-closable | 点击蒙层是否允许关闭 | `Boolean` | true |
| visible | Picker 是否可见 | `Boolean` | false |
| ok-text | 确定按钮文字 | `String` | 确定 |
| cancel-text | 取消按钮文字 | `String` | 取消 |
| title-font-size | 确定按钮和取消按钮文字大小 | `Number` | 32 |
| confirm-color | 确定按钮文字颜色 | `String` | #1890ff |
| cancel-color | 取消按钮文字颜色 | `String` | #828282 |
| item-font-size | 被选元素的文字大小 | `Number` | 28 |
| item-color | 被选元素的文字颜色 | `String` | #666666 |
| item-select-color | 选中时的文字颜色 | `String` | #1890ff |
| list | 传入的数据，如需要多列显示请传入一个二维数组 | `Array` | - |
| on-close | 点击取消的回调 | `Function` | - |
| on-select | 点击确定的回调 | `Function` | - |


## 更新日志

#### v1.0.5（2018-10-23)  
* 新增 `Picker` 组件

#### v1.1.0（2018-11-19)  
* `Picker` 组件支持自定义样式
