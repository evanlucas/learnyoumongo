ここでは、ドキュメントを検索する方法を学びます。

この演習でのデータベース名は `learnyoumongo` です。
なので、urlはこのようになります: `mongodb://localhost:27017/learnyoumongo`

プログラムを書いて、その第1引数より `age` が大きいすべてのドキュメントを、`parrots`コレクションより検索してください。

`console.log`を使用して、`標準出力`にドキュメントを表示してください。

-----------------------------------------------------------
## ヒント

データベースに接続するには、このようになります。

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db gives access to the database
})
```

`db.collection('<collection name>')` とする事で、コレクションを取得できます。

ドキュメントを検索するためには、コレクションの `find()` メソッドをを呼び出します。

findは、私たちが見慣れているものよりもほんの少し異なっています。

引数にアクセスするには、文字列の配列 `process.argv` を使用します(第1引数は、配列の3番目 `process.argv[2]` に格納されています）。
parseInt()を使用すれば、整数に変換することができます。

次に例を示します。

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```

もしプログラムの実行が終了しない場合、`db`を閉じるのを忘れている可能性があります。プログラムの最後に `db.close()` を呼び出す事で終了することができます。

## 参考資料:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
