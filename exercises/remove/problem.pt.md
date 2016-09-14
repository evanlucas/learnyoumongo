Neste exercicio um documento com '_id' especifico sera removido.

O nome da database estara' no `process.argv[2]`.

O nome da collection sera' passado como o segundo argumento do script.

O `_id` sera' pasado como o terceiro argumento do script.

-----------------------------------------------------------
## DICAS

Para remover um documento, deve-se utilizar `remove()` na collection.

Ex.

```js

collection.remove({
  name: 'foo'
}, callback)
```

O primeiro argumento para `remove()` e' a query.

Se o seu programa nao finalizar a execucao, voce deve ter esquecido de fechar o 'db'.
Para faze-lo execute `db.close()` ao final de seu programa.

## Recursos:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove
