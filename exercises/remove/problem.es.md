Esta lección se trata de eliminar un documento con la dada identificación
`_id`.

El nombre de la base de datos será accesible por `process.argv[2]`.

El nombre de la colección será el segundo argumento pasado a tu script.

La identificación `_id` será el tercer argumento pasado a tu script.

-----------------------------------------------------------
## PISTAS

Para eliminar un documento, hay que usar `remove()` en la colección.

Por ejemplo:

```js

collection.remove({
  name: 'foo'
}, callback)
```

El primer argumento a la función `remove()` es la consulta.

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recurso:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove
