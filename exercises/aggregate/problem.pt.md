Proximo e' agregation. Com Aggregation podemos calcular a soma de  
de um camp em multiplos documentos or a media de um campo de um  
documento seguindo um criterio particular.

Digamos que temos uma collection `prices`. Cada documento price e' modelado
da seguinte forma:

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

Nesse exercicio, precisamos de calcular a media de preco(price) para todos
os `prices` da collection no db `learnyoumongo` que tem seu tamanho passado
como primeiro argumento no script.

Use `console.log()` para imprimir a media de precos arredondado em 2 decimais
para stdout depois de encontra'-la.

-----------------------------------------------------------
## DICAS

Para user a funcao `aggregate()`, e' necessa'ario primeiramente a collection.
A funcao `aggregate()` usa um array de objetos como primeiro argumento.

Esse array contem as pipelines para a agregation.
Para ler mais sobre pipelines, visite [Aggregation](http://docs.mongodb.org/manual/core/aggregation-introduction/).
Para ler mais sobre agregation, visite [`aggregate()`](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate).


Os dois principais pipelines que usaremos serao: `$match` and `$group`.

### $match

`$match` e' similiar a forma que uma query 'e realizada. Ele nos permite selecionar
um documento que possui um criterio.

Ex.

```js
var match = { $match: { status: 'A' } }
```

O exemplo acima retornara' todos os documentos que tem 'status' egual a 'A'.

### $group

`$group` nos permite usar operacoes nas buscas.

Digamos que queremos a soma dos valores 'value' para status igual a 'A', e o resultado
seja disponibilizdo em 'total'.

Ex.

```js
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // This can be an arbitrary string in this case
  , total: {
      // $sum is the operator used here
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // handle error
  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
```
Outra operacao usando `$group`:

- `$avg`
- `$first`
- `$last`
- `$max`
- `$min`
- `$push`
- `$addToSet`

# Rounding

O prototipo `Number` contem a function `toFixed()`, esta aceita o numero 
de decimais que pretende usar, e retorna uma string representando-o.

      var value = "1"
      Number(value).toFixed(5)
      // => '1.00000'

Se seu program nao finalizar a execucao, voce pode ter esquecido the fechar o 'db'. 
Para faze-lo basta executar o comando `db.close()` apos finalizer o programa.

## Recursos
* http://docs.mongodb.org/manual/aggregation/
* http://docs.mongodb.org/manual/core/aggregation-introduction/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate
