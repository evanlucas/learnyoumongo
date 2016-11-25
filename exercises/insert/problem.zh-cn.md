把MongoDB连接到`27017`端口。
您应该连接到`learnyoumongo`数据库，然后在`docs`集（collection）中增加新条目。

该条目是json文档，以下是它的属性：

- `firstName`
- `lastName`

`firstName` 将会是第一个参数。

`lastName` 将会是第二个参数。

成功新增条目后，用`console.log`来显示该条目。

确保您使用了`JSON.stringify`来将该条目转换成JSON。

-----------------------------------------------------------
## 提示

注意，您必须通过`process.argv`取得参数。

为了使用`mongo`套件，您需要将其导入，方法如下：

```js
var MongoClient = require('mongodb').MongoClient
```

使用`connect()`函式 连接`MongoClient`。

例：

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err

})
```

如果您看到`Connection Refused`报错，请确保您的`mongod`还在另一个终端运行中。

如果您成功连上了数据库，您需要指定特定的集（collection）。
在`db`函式的回呼（callback）中，使用`collection()`函式来进行连接。

假设您想要连接名称为`users`的集（collection）：

```js
var collection = db.collection('users')
```

您可以在集（collection）中呼叫`insert()`函式来新增条目（document），如下：

```js

// 新增新条目
// { a : 2 }
collection.insert({
  a: 2
}, function(err, data) {
  // 处理报错

  // 其他操作
})
```

如果程序没有自动停止运行，你可能忘了终结`db`。你可以在代码内使用`db.close()`来关闭数据库连接。

## 参考资料
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insert
