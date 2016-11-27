本堂课，我们将会学习如何获取条目总计数。

在`learnyoumongo`数据库中的`parrots`集 中统计所有条目`age`变数是大于 第一个自带的参数（process.argv）。

用 `console.log` 将相关条目输出到 `stdout`。

-----------------------------------------------------------
## 提示

您可以使用`collection.count()`函式来进行计数。

例子如下:

```js
collection.count({
  name: 'foo'
}, function(err, count) {

})
```

如果程序没有自动停止运行，你可能忘了终结`db`。
你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count