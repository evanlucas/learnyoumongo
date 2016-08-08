Ahora vamos a aprender cómo buscar documentos.

En este ejercicio la base de datos se llama `learnyoumongo.
Así que el url sería algo así: `mongodb://localhost:27017/learnyoumongo`

Usa la colección `parrots` para encontrar todos los documentos donde
el valor del campo `age` sea mayor que el primer argumento dado a tu
script.

Usando `console.log`, haz que se impriman los documentos a `stdout`.

-----------------------------------------------------------
## PISTAS

Para conectarte a la base de datos, puedes ejecutar algo así:

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db te da acceso a la base de datos
})
```

Para acceder a una colección, pueues usar `db.collection('<nombre de colección>')`.

Para encontrar unos documentos, hay que usar `find()` en la colección.

`find()` es una función un poco diferente de lo que hemos visto anteriormente.

Para acceder a los parámetros puedes usar el array (formación) de strings (cadenas de
caracteres) llamado `process.argv`. El primer parámetro se encuentra en la tercera
posición, `process.argv[2]`. Para convertirlo a un número entero, puedes usar la
función `parseInt()`.

Por ejemplo:

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recursos:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt