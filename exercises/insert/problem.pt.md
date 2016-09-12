Connect ao MongoDB na port `27017`.
Voce devera conectar a database `learnyoumongo` e inserir 
um documento na collection `docs`.

O documento devera ter o formato JSON:

- `firstName`
- `lastName`

`firstName` sera' passado como primeiro argumento .

`lastName` sera' passado como segundo argumento.

Use `console.log` para imprimir o objeto usado para criar o documento.

Certifique-se de usar `JSON.stringify` e corverta para JSON.

-----------------------------------------------------------
## DICAS

Lembre-se, voce podera acessar os argumentos passados usando `process.argv`.

Para usar o pacote `mongo`, deve-se antes inicializa-lo com:

```js
var MongoClient = require('mongodb').MongoClient
```

Para conectar, use a funcao `connect()` de `MongoClient`.

Ex.

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err

})
```

Se receber erro 'Connection Refused`, certifique-se que `mongod` esta 
sendo executado.

Apos conectar-se, e; necessario especificar uma collection. Para faze-lo, 
chame a funcao `collection()`  no `db`. 

Digamos que queira criar uma collection chamada `users`:

```js
var collection = db.collection('users')
```

Para inserir um documento, utilize `insert()` na collection, assim:
```js

// inserting document
// { a : 2 }
collection.insert({
  a: 2
}, function(err, data) {
  // handle error

  // other operations
})
```

Se o seu programa nao finalizar a execucao, voce deve ter esquecido de fechar o 'db'.
Para faze-lo execute `db.close()` ao final de seu programa.

## Recursos:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insert
