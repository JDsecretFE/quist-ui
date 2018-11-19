# Drawer

> 抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-drawer" src="@quist-ui/quist-drawer/index"></import>
```

## 例子

#### 底部弹出

```js{4}
<quist-drawer @on-close="close" placement="bottom">
  <div class="mask">
    <text class="mask-cnt">hello qucikapp</text>
  </div>
</quist-drawer>
```

#### 顶部弹出

```js{4}
<quist-drawer @on-close="close" placement="top">
  <div class="mask">
    <text class="mask-cnt">hello qucikapp</text>
  </div>
</quist-drawer>
```

#### 左侧弹出

```js{4}
<quist-drawer @on-close="close" placement="left">
  <div class="mask2">
    <text class="mask-cnt">hello qucikapp</text>
  </div>
</quist-drawer>
```

#### 右侧弹出

```js{4}
<quist-drawer @on-close="close" placement="right">
  <div class="mask2">
    <text class="mask-cnt">hello qucikapp</text>
  </div>
</quist-drawer>
```

更详细代码可以参考 [quist-drawer demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Drawer/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| mask-closable | 点击蒙层是否允许关闭 | `Boolean` | true |
| visible | Drawer 是否可见 | `Boolean` | false |
| placement | 抽屉的方向，可选值为 `bottom` `top` `left` `right` | `String` | bottom |
| on-close | 点击蒙层的回调 | `Function` | - |


## 更新日志

#### v1.0.0（2018-09-30）
* 初始版本
