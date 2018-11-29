# Dialog

> 弹出式提示框，有多种交互形式。


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-dialog" src="@quist-ui/quist-dialog/index"></import>
```

## 例子

#### 常规对话框

```js{4}
<quist-dialog mask-closable="{{true}}" title="标题" cancel-text="取消" @on-cancel="onCancel" @on-ok="onOk" content="这是内容这是内容" type="normal">
</quist-dialog>
```

#### 只有一个按钮的对话框

```js{4}
<quist-dialog mask-closable @on-cancel="onCancel" title="标题" @on-ok="onOk" content="只有一个确定按钮" type="onebtn">
</quist-dialog>
```

#### 无标题的对话框（点击蒙层不关闭弹窗）

```js{4}
<quist-dialog @on-cancel="onCancel" cancel-text="取消" @on-ok="onOk" content="没有标题没有标题没有标题没有标题没有标题" type="notitle">
</quist-dialog>
```

#### 无底部按钮无标题的对话框

```js{4}
<quist-dialog mask-closable="{{true}}" footer="{{false}}" @on-cancel="onCancel" content="没有标题没有标题没有标题没有标题没有标题" type="nofooter">
</quist-dialog>
```

#### 自定义样式

```js{4}
<quist-dialog mask-closable @on-cancel="onCancel" title="提示" title-size="{{50}}" ok-color="#E64340" content-size="{{42}}" cancel-color="#1890ff" cancel-text="取消" @on-ok="onOk" content="自定义样式">
</quist-dialog>
```

更详细代码可以参考 [quist-dialog demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Dialog/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| mask-closable | 点击蒙层是否允许关闭 | `Boolean` | false |
| visible | 对话框是否可见 | `Boolean` | false |
| title | 标题（如果不想显示标题，请不要传此参数） | `String` | - |
| title-size | 标题大小 | `Number` | 36 |
| title-color | 标题文字颜色 | `String` | #333333 |
| content | 内容 | `String` | - |
| align | 内容的对齐方式，可传的值有`left`、`center`、`right` | `String` | center |
| content-size | 内容大小 | `Number` | 30 |
| content-color | 内容文字颜色 | `String` | #999999 |
| ok-text | 确定按钮文案 | `String` | 确定 |
| ok-color | 确定按钮的文字颜色 | `String` | #1890ff |
| cancel-text | 取消按钮文案（如果只想显示一个按钮，请不要传此参数） | `String` | - |
| cancel-color | 取消按钮的文字颜色 | `String` | #333333 |
| type | 弹窗类型，可选值为 `normal` `onebtn` `notitle` `nofooter` | `String` | - |
| footer | 底部两个按钮是否都显示 | `Boolean` | true |
| on-cancel | 点击遮罩层或取消按钮的回调 | `Function` | - |
| on-ok | 点击确定按钮的回调 | `Function` | - |



## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本

#### v1.0.7（2018-10-30）
* [优化] 可自定义样式，标题和内容的文字大小、颜色，确定和取消按钮的颜色

#### v1.1.1（2018-12-03）
* [优化] 修改默认样式