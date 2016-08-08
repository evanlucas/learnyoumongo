次は集約です。
集約を使えば、複数のドキュメントのフィールドの合計や、特定の基準を満たすドキュメントのフィールドの平均値を計算したりできます。

あなたは `prices` という名前のコレクションを持っています。色々な価格のドキュメントがモデル化されています。
このように：

```js
{
  "name": "Tshirt",
  "size": "S",
  "price": 10,
  "quantity": 12
  "meta": {
    "vendor": "hanes",
    "location": "US"
  }
}
```

この演習では、`learnyoumongo` という名前のデータベース内の、 `prices` コレクション内で、スクリプトの第1引数の値と `size` が合致する、すべてのドキュメントの平均価格を計算する必要があります。

取得した平均価格は、小数点以下2桁に丸めた上で、`console.log` を使用して `標準出力` に表示してください。

-----------------------------------------------------------
## ヒント

`aggregate()`関数を使用するには、まずはコレクションが必要です。
`aggregate()`関数は第1引数としてオブジェクトの配列を取ります。


その配列は、集約のための異なるパイプラインが含まれています。パイプラインの詳細については、[Aggregation](http://docs.mongodb.org/manual/core/aggregation-introduction/)をご覧ください。

私たちが使用する二つの主要なパイプラインステージは、`$match`と `$group` になります。


### $match

`$match`は、クエリと似たような方法で使用されます。これは、一定の基準を満たすドキュメントを選択することを可能にします。

例:

```js
var match = { $match: { status: 'A' } }
```

上記の例では`status`プロパティが`A`に等しいすべてのドキュメントに一致します。

### $group

`$group`は、特定のプロパティに対する操作を実行することを可能にするものです。

status が`A`に等しいプロパティ`value`の値の合計を取得し、それを `total` プロパティに配置したい場合を例示します。

例:

```js
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // ここには任意の文字列を指定できます
  , total: {
      // $sumは、使用される演算子です
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // エラー制御

  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
```

`$group`で使用される他の演算子は次のとおりです。

- `$avg`
- `$first`
- `$last`
- `$max`
- `$min`
- `$push`
- `$addToSet`

# 数値を丸める

`Number`のprototypeには、数値を希望の小数点以下の桁数がに丸め、文字列にして返す`toFixed()`ファンクションが有ります。


      var value = "1"
      Number(value).toFixed(5)
      // => '1.00000'

もしプログラムの実行が終了しない場合、 `db`を閉じるのを忘れている可能性があります。プログラムの最後に `db.close()` を呼び出す事で終了することができます。

## 参考資料:
* http://docs.mongodb.org/manual/aggregation/
* http://docs.mongodb.org/manual/core/aggregation-introduction/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate
