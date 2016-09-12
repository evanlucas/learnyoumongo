Aqui aprenderemos como fazer uma busca por documentos.

Para este exercicio usaremos o database `learnyoumongo`.
Entao, a URL sera algo do tipo:`mongodb://localhost:27017/learnyoumongo`

Use a collection `parrots` para encontrar todos os documentos onde `age`
e' maior que o primeiro argumento do script.

Use `console.log`, para imprimir os documentos na `stdout`.

-----------------------------------------------------------
## DICAS

Para conectar-se ao database, podera ser realizado dessa forma:

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db gives access to the database
})
```

Para criar uma collection, use o comando `db.collection('<collection name>')`.

Para encontrar um documento ou documentos, use `find()` na collection.

Find e' um pouco diferente do que estamos acostumados a ver.

Para acessar argumentos use `process.argv` array de strings (O primeiro argumento
esta' na terceira posicao `process.argv[2]`). Para converter em integer, use parseInt().

Veja um exemplo:

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```

Se o seu programa nao finalizar a execucao, voce deve ter esquecido de fechar o 'db'.
Para faze-lo execute `db.close()` ao final de seu programa.

## Recursos:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
