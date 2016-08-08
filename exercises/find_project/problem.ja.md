ここでは、我々が必要とするドキュメントのフィールドだけを検索し取得する方法を学習します。
いわゆる、MongoDBにおける `射影` です。

`learnyoumongo` データベースから `parrots` コレクションを使用して、あなたのスクリプトに渡された最初の引数よりも `age` が大きい全てのドキュメントを取得してください。

前回のレッスンとの違いは、唯一 `name` プロパティが、`age` プロパティ以外に必要という事です。

`console.log`を使用して、ドキュメントを `標準出力` に出力してください。

-----------------------------------------------------------
## ヒント

単一または複数のドキュメントを検索するには、コレクションに対し `find()` を呼び出す必要があります。

findは、私たちが普段見慣れているものよりもほんの少し異なっています。

次に例を示します:


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

もしプログラムの実行が終了しない場合、`db`を閉じるのを忘れている可能性があります。プログラムの最後に `db.close()` を呼び出す事で終了することができます。

## 参考資料:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
