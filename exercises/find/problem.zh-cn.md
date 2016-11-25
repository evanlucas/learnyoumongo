本堂课我们将学习如果寻找相关条目。

本次使用数据库名称为`learnyoumongo`。
所以url将会是：`mongodb://localhost:27017/learnyoumongo`

在`parrots`集 中查询任何条目的`age`变数是大于 第一个自带的参数（process.argv）。

用 `console.log` 将相关条目输出到 `stdout`。

-----------------------------------------------------------
## 提示

您可以通过以下方法连接数据库：

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db gives access to the database
})
```

您可以使用`db.collection('<collection name>')`来获取相关的集。

使用集的`find()`函式来查询相关条目。

查询函式跟此前用过的函式有些不同。

想要使用自带的参数，您可以使用`process.argv`来获取参数的字符串阵列。
（第一个参数将会在阵列的第三组 `process.argv[2]`）。
您需要使用`parseInt()`将其参数转换成整数值。

例子如下：

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```

如果程序没有自动停止运行，你可能忘了终结`db`。
你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
