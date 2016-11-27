本堂课是在集（collection）里使用`_id`来删除条目。

数据库名称是第一个参数，可以通过`process.argv[2]`取得。

集（collection）的名称是第二个参数。

`_id` 是第三个参数。

-----------------------------------------------------------
## 提示

使用`remove()`来删除条目

例：

```js

collection.remove({
  name: 'foo'
}, callback)
```

`remove()`的第一个参数是 查询参数（query）。

如果程序没有自动停止运行，你可能忘了终结`db`。你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove