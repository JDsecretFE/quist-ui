# Rate

> 评分组件。


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name="quist-rate" src="@quist-ui/quist-rate/index"></import>
```

## 例子

#### 默认样式：

```js{4}
<quist-rate @on-change="onClick"></quist-rate>
```

#### 自定义背景及选中颜色、大小、个数、间距：

```js{4}
<quist-rate @on-change="onClick" count="{{6}}" star-color="#999999" active-color="#87d068" size="{{80}}" margin="{{10}}"></quist-rate>
```

#### 设置默认选中的个数：

```js{4}
<quist-rate @on-change="onClick" value="{{3}}"></quist-rate>
```

#### 禁用状态：

```js{4}
<quist-rate value="{{2}}" disabled="{{true}}"></quist-rate>
```

#### 再次点击不清除：

```js{4}
<quist-rate @on-change="onClick" allow-clear="{{false}}"></quist-rate>
```

#### 自定义形状：

```js{4}
<quist-rate star-icon="✩" @on-change="onClick"></quist-rate>
<quist-rate star-icon="☻" @on-change="onClick"></quist-rate>
```


更详细代码可以参考 [quist-rate demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Rate/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| count | star 总数 | `Number` | 5 |
| value | 评分值 | `Number` | 0 |
| star-icon | star的形状 | `String` | ★ |
| size | star的大小 | `Number` | 50 |
| margin | star的左右间距 | `Number` | 4 |
| star-color | 未被选中的star颜色 | `String` | #e8e8e8 |
| active-color | 选中的star颜色 | `String` | #fdba3b |
| disabled | 是否禁用 | `Boolean` | false |
| allow-clear | 是否允许再次点击后清除 | `Boolean` | true |
| on-change | 选择时的回调 | `Function` | - |



## 更新日志

#### v1.1.1（2018-12-03)  
* 新增 `Rate` 组件
