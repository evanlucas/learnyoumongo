Ahora vamos a aprender cómo buscar documentos pero solo acceder a los campos
que necesitamos. Este método es conocido como proyección (`projection`) en MongoDB.

Usa la colección `parrots` de la base de datos llamada `learnyoumongo` para
encontrar todos los documentos donde `age` sea mayor que el primer argumento
dado a tu script.

La diferencia entre esta lección y la anterior es que solo queremos los campos
`name` y `age`.

Usando `console.log`, haz que se impriman los documentos a `stdout`.

-----------------------------------------------------------
## PISTAS

Para encontrar los documentos, hay que usar `find()` en la colección.

`find()` es una función un poco diferente de lo que hemos visto anteriormente.

Por ejemplo:

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

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recurso:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find