# Search

> 搜索，可附带前缀、后缀图标, 可设置禁用状态，可自定义样式


## 安装

```
$ npm install quist-ui -D
```

## 引入
```js{4}
<import name='quist-search' src='@quist-ui/quist-search/index'></import>
```

## 例子

#### 默认输入框

```js{4}
<quist-search placeholder='请输入关键字'></quist-search>
```

#### 带后缀的输入框

```js{4}
<quist-search placeholder='请输入关键字' suffix="{{suffix}}"></quist-search>
```

#### 带前缀的输入框

```js{4}
<quist-search placeholder='请输入关键字' prefix="{{prefix}}" suffix="{{suffix}}"></quist-search>
```

#### 禁用状态的输入框

```js{4}
<quist-search placeholder='请输入关键字' disabled></quist-search>
```

更详细代码可以参考 [quist-search demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Search/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 输入框内容 | `String` | - |
| placeholder | 占位 | `String` | - |
| disabled | 是否禁用 | `Boolean` | false |
| autofocus | 是否自动获取焦点 | `Boolean` | false |
| prefix | 带有前缀图标的input | `String` | - |
| suffix | 带有后缀图标的input | `String` | - |
| icon-style | 图标样式覆盖入口 | `Object` | {} |
| wrapper-style | 外层样式覆盖入口 | `Object` | {} |
| input-style | 输入框样式覆盖入口 | `Object` | {} |
| on-change | 监测数据改变事件 | `function` | - |

## 更新日志

#### v1.1.2（2018-12-10）
* 新增 `Search` 组件

