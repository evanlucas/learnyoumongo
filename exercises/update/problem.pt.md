Aqui faremos alteracao em um documento na collection `users`.

O nome da database esta disponivel `process.argv[2]`.

Digamos que temos um usuario definido:

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

Queremos alterar a idade (age) de Tina de 30 para 40.

Para esse exercicio, assuma que a propriedade 'username` e' unica.

-----------------------------------------------------------
## DICAS

Para atualizar o documento, utilize `update()` na collection.

Ex.

```js

// document
// { a: 2, b: 3 }

collection.update({
  a: 2
}, {
  $set: {
    b: 1
  }
}, callback)

// documento atualizado
// { a: 2, b: 1 }
```

O primeiro argumento `update()` e' a query. Essa query e' o que filtra os documentos que desejamos alterar. O segundo argumento e' um objeto de prpriedade a ser alterada. Atencao a 
propriedade `$set`. Se for omitido `$set`, o documento sera substituido pelo object representado no segundo argumento.

Se o seu programa nao finalizar a execucao, voce deve ter esquecido de fechar o 'db'.
Para faze-lo execute `db.close()` ao final de seu programa.

## Recursos:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
