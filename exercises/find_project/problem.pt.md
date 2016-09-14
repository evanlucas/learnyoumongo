Aqui aprenderemos como realizar uma busca por documentos mas somente nos 
campos que precisamos. Tambem conhecido como 'projection' em MongoDB.

Use `parrots` collection do database `learnyoumongo` para encontrar todos os
documentos onde `age` e' maior que o primeiro argumento passado para seu
script.

A diferenca para o ultimo exercicio e' que deve retornar somente as propriedades
`name` and `age`.

Use `console.log`, para imprimir os documentos na `stdout`.

-----------------------------------------------------------
## DICAS

Para encontrar um documento ou documentos, utilize o comando `find()` em uma 
collection.

Find e' um pouco diferente do que voce esta' acostumado a ver.

Veja um exemplo:

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

Se o seu programa nao finalizar a execucao, voce deve ter esquecido de fechar o 'db'.
Para faze-lo execute `db.close()` ao final de seu programa.

## Recursos:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
