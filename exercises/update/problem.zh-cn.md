现在我们想要更新（update）在于`users`集（collection）里的条目。

数据库名称可以从`process.argv[2]`获取。

用户物件（object）如下：

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

我们想要把Tina的年龄从30岁改成40岁。

假设`username`是主键（unique property）.

-----------------------------------------------------------
## 提示

想要更新条目，可以使用`update()`。

例：

```js

// 条目
// { a: 2, b: 3 }

collection.update({
  a: 2
}, {
  $set: {
    b: 1
  }
}, callback)

// 条目已更新
// { a: 2, b: 1 }
```

`update()`的第一个参数是 查询参数（query），使用查询参数过滤掉不必要条目。第二个参数是 引数（argument），是用于更改条目数据。`$set`属性可以让第二个参数的资料取代原本的条目。

如果程序没有自动停止运行，你可能忘了终结`db`。你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
