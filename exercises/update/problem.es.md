Ahora vamos a actualizar un documento en la colección llamada `users`.

El nombre de la base de datos será accesible por `process.argv[2]`.

Digamos que tenemos un usuario definido así:

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

Queremos cambiar la edad (age) de Tina de 30 a 40.

Por los propósitos de esta lección, supongamos que el campo `username` es único.

-----------------------------------------------------------
## PISTAS

Para actualizar un documento, hay que usar `update()` en la colección.

Por ejemplo:

```js

// documento
// { a: 2, b: 3 }

collection.update({
  a: 2
}, {
  $set: {
    b: 1
  }
}, callback)

// documento fue actualizado
// { a: 2, b: 1 }
```

El primer argumento a la función `update()` es la consulta. Esta consulta es lo que
filtra los documentos que queremos actualizar. El segundo argumento es un objeto de
los campos que queremos actualizar. Presta mucha atención al campo llamado `$set`. Si
omitiéramos el campo `$set`, el documento sería reemplazado con el objeto representado
por el segundo argumento.

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recursos
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
