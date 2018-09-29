# Counter

> 计数器组件


## 安装

```
$ npm install quist-ui -g
```

## 引入
```ux
<import name='quist-counter' src='@quist-ui/quist-counter/index'></import>
```

## 例子

#### 默认计数器展示

```ux
<quist-counter value="{{1}}" @on-change="valueChange"></quist-counter>
```

#### 禁止更改计数器展示

```ux
<quist-counter value="{{10}}" disabled></quist-counter>
```

#### 设置最大值的计数器展示(最大值为10)

```ux
<quist-counter value="{{3}}" max="{{10}}" @on-change="valueChange"></quist-counter>
```

#### 设置最小值的计数器展示(最小值为2)

```ux
<quist-counter value="{{1}}" min="{{2}}" @on-change="valueChange"></quist-counter>
```

更详细代码可以参考 [quist-counter demo](https://github.com/JDsecretFE/quist-ui/tree/master/src/Counter/index.ux)

## API 

| 属性 | 说明 | 类型 | 默认值 |
|-------------|------------|:--------:|:-----:|
| value | 当前数值 | `Number` | 0 |
| min | 最小值 | `Number` | 0 |
| max | 最大值 | `Number` | - |
| disabled | 是否禁用 | `Boolean` | false |
| on-change | 变化回调 | `Function` | - |


## 更新日志

v1.0.0（2018-09-30）
> 初始版本
