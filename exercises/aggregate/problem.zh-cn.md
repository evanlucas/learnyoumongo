接下来是聚合。
聚合可以针对多个条目栏位进行总和或平均等计算方式。

假设您有个集名称是`prices`。
每条条目的模型如下：

```js
{
  "name": "Tshirt",
  "size": "S",
  "price": 10,
  "quantity": 12
  "meta": {
    "vendor": "hanes",
    "location": "US"
  }
}
```

本次练习，您需要计算所有`size`与第一个自带参数（process.argv）相同的价格`price` 的价格平均值。
集的名称是`prices`，而数据库的名称是`learnyoumongo`。

将答案进位到俩个小数点后，用 `console.log` 输出到 `stdout`。

-----------------------------------------------------------
## 提示

`aggregate()`函式将第一参数是物件列阵。

这个列阵包含不同的聚合管线，详细资料请参考：[Aggregation](http://docs.mongodb.org/manual/core/aggregation-introduction/)。
想学习更多关于`aggregate()`的知识，请参考：[`aggregate()`](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate)。


这堂课会使用的俩个主要的管线是`$match` 和 `$group`。

### $match

`$match` 是用于寻找相识的条目，类似于查询功能。它让我们轻松的过滤掉不需要的条目。

例：

```js
var match = { $match: { status: 'A' } }
```

上述例子会返回所有`status`是`A`的条目。

### $group

`$group` 方便我们对条目的变数进行处理。

假设我们想要获得status是A的`value`总和，然后给予它`total`的变数属性。

例：

```js
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // 聚合处理中的id可以是字符串
  , total: {
      // 这里使用了 $sum 函式 
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // handle error
  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
```
其他处理函式有：

- `$avg`
- `$first`
- `$last`
- `$max`
- `$min`
- `$push`
- `$addToSet`

# 进位

`Number` 的 原型（prototype）里自带`toFixed()`函式。
`toFixed()` 接收小数位，然后返回字符串。

      var value = "1"
      Number(value).toFixed(5)
      // => '1.00000'

如果程序没有自动停止运行，你可能忘了终结`db`。
你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料：
* http://docs.mongodb.org/manual/aggregation/
* http://docs.mongodb.org/manual/core/aggregation-introduction/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate
