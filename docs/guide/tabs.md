# Tabs

> 选项卡切换组件。

## 效果
![效果展示](http://pji4lsgkc.bkt.clouddn.com/image-1544412640612-V2VjaGF0SU1HMTIucG5n.png)

## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-tabs" src="@quist-ui/quist-tabs/index"></import>
<import name="quist-tabs-item" src="@quist-ui/quist-tabsItem/index"></import>
```

## 例子

#### 默认样式（左对齐）:

```js{4}
<quist-tabs>
  <quist-tabs-item selected="{{curIdx === tabIdx}}" @on-click="select(tabIdx)" for="(tabIdx, tabItem) in tabs" tab="{{tabItem}}"></quist-tabs-item>
</quist-tabs>
```

#### 默认样式（水平分布）:

```js{4}
<quist-tabs>
  <quist-tabs-item layout="center" selected="{{curIdxc === tabIdx}}" @on-click="selectc(tabIdx)" for="(tabIdx, tabItem) in tabsc" tab="{{tabItem}}"></quist-tabs-item>
</quist-tabs>
```

#### 自定义样式（水平分布）:

```js{4}
<quist-tabs border-color="#87d068">
  <quist-tabs-item layout="center" line-width="{{4}}" f-size="{{36}}" active-color="#fac450" default-color="#333333" selected="{{curIdxb === tabIdx}}" @on-click="selectb(tabIdx)" for="(tabIdx, tabItem) in tabsb" tab="{{tabItem}}"></quist-tabs-item>
</quist-tabs>
```

更详细代码可以参考 [quist-tabs demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Tabs/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| border-color | 选项卡底部边框颜色 | `String` | #dddddd |
| tab | 选项卡标题 | `String` | - |
| height | 选项卡标题的高度 | `Number ` | 88 |
| margin-x | 选项卡标题左右间距 | `Number ` | 20 |
| default-color | 选项卡文字颜色 | `String` | #666666 |
| f-size | 选项卡标题的大小 | `Number ` | 32 |
| active-color | 选中的颜色 | `String ` | #1890ff |
| line-width | 选中时border的宽度(如不想显示border，请传0) | `Number` | 2 |
| selected | 是否选中 | `Boolean ` | false |
| layout | 对齐方式，可选的值有 `left` `center` | `String ` | left |



## 更新日志

#### v1.0.8（2018-11-01)  
* 新增 `Tabs` 组件

#### v1.1.2（2018-12-10)  
* [优化] 修改默认样式
