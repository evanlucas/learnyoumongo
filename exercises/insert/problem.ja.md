MongoDB に ポート`27017`で接続してください。

あなたは、`learnyoumongo`という名前のデータベースに接続し、`docs`コレクションにドキュメントを挿入する必要があります。

ドキュメントは、次のプロパティを持つJSON文書でなければなりません。

- `firstName`
- `lastName`

`firstName`は、レッスンの第1引数として渡されます。

`lastName`は、レッスンの第2引数として渡されます。


`console.log` を使用して、ドキュメントを作成するために使用したオブジェクトをプリントアウトしてください。

`JSON.stringify` を使用してJSONに変換する事を忘れないでください。


-----------------------------------------------------------
## ヒント

一つは、`process.argv`を使用して引数にアクセスすることができることを覚えておいてください。

MongoDBのパッケージを使用するためには、この様にrequireします:

```js
var MongoClient = require('mongodb').MongoClient
```

接続するには、 `MongoClient` の関数 `connect()` を使います。


例.

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err

})
```

もし`Connection Refused` エラーが発生した場合、`mongod`が実行されているていることを確認してください。

正常に接続したら、コレクションを指定する必要があります。

`connect` へのコールバックで返された `db` 上の関数 `collection()` を呼び出す事で指定できます。

`users`という名前のコレクションを指定したいならこうです：

```js
var collection = db.collection('users')
```

文書を挿入するためには、このようにコレクションの`insert()`を呼び出す必要があります：
```js

// 追加するドキュメント
// { a : 2 }
collection.insert({
  a: 2
}, function(err, data) {
  // エラー制御

  // 何らかの処理
})
```

もしプログラムの実行が終了しない場合、`db`を閉じるのを忘れている可能性があります。プログラムの最後に `db.close()` を呼び出す事で終了することができます。

## 参考資料:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insert
