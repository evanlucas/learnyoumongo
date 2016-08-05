ここでは、`users` コレクション内の文書を更新します。

データベース名は `process.argv[2]` を介してアクセス可能になります。

この様に定義されたユーザがあります:

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

Tinaさんの年齢を30から40に変更したいです。

このレッスンでは、`username`プロパティが一意であるとします。


-----------------------------------------------------------
## ヒント

文書を更新するためには、コレクションの `update()` を呼び出す必要があります。

例:

```js

// ドキュメント
// { a: 2, b: 3 }

collection.update({
  a: 2
}, {
  $set: {
    b: 1
  }
}, callback)

// 更新されたドキュメント
// { a: 2, b: 1 }
```

`update()`の第1引数はクエリです。このクエリは、我々が更新したいドキュメントをフィルタリングするものです。

二番目の引数は更新するプロパティ達が格納されたオブジェクトです。
`$set`プロパティには細心の注意を払ってください。

`$set`を省略した場合、ドキュメントは第2引数で渡されたオブジェクトで置き換えられます。


もしプログラムの実行が終了しない場合、`db`を閉じるのを忘れている可能性があります。プログラムの最後に `db.close()` を呼び出す事で終了することができます。

## 参考資料:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
