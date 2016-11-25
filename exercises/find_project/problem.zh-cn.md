本课我们将学习如果寻找相关条目，并限制返回变数栏位。
这方法在MongoDB里也称为`projection`。

使用数据库`learnyoumongo`中的 `parrots`集。
您需要寻找 `age` 大于 第一个参数（process.argv）。

与上堂课不同的是，我们只想取得`name` 和 `age`变数。

用 `console.log` 将相关条目输出到 `stdout`。

-----------------------------------------------------------
## 提示

使用`find()`函式 查询一个或多个条目。

查询函式跟此前用过的函式有些不同。

例子如下：

```js
collection.find({
  name: 'foo'
}, {
  name: 1
, age: 1
, _id: 0
}).toArray(function(err, documents) {

})
```

如果程序没有自动停止运行，你可能忘了终结`db`。
你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
