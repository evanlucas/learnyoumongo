Aqui aprenderemos como contar o numero de documentos que satisfazem um 
certo criterio.

Use a collection `parrots` da database `learnyoumongo` para contar todos os 
documentos que tem `age` maior que o primeiro argumento passado pelo 
script.

Usando `console.log`, imprima o numero na `stdout`.

-----------------------------------------------------------
## DICAS

Para contar o numero de documentos que satisfazem o criterio, voce precisa 
usar  `collection.count()` function.

Veja um exemplo:

```js
collection.count({
  name: 'foo'
}, function(err, count) {

})
```

Se o seu programa nao finalizar a excucao, voce deve ter esquecido de fechar o db. 
Para fecha-lo execute o comando `db.close()` ao final do seu programa.

## Recursos
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count