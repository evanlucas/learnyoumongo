Conéctate a MongoDB en el puerto `27017`.
Deberías conectarte a la base de datos llamada `learnyoumongo` e
insertar un documento a la colección llamada `docs`.

El documento debe ser de JSON y debe tener los campos siguientes:

- `firstName`
- `lastName`

`firstName` será el primer argumento pasado a tu script.

`lastName` será el segundo argument pasado a tu script.

Usa `console.log` para imprimir el objeto usado para crear el documento.

Asegúrate de que uses `JSON.strigify` para convertirlo a JSON.

-----------------------------------------------------------
## PISTAS

Recuerda que puedes acceder a los argumentos usando `process.argv`.

Para usar el paquete (package) `mongo`, hay que exigirlo así:

```js
var MongoClient = require('mongodb').MongoClient
```

Para conectarte, usa la función `connect()` de `MongoClient`.

Por ejemplo:

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err

})
```

Si recibes un error que dice `Connection Refused`, asegúrate de que
`mongod` todavía esté ejecutando.

Después de tener éxito con la conexión, tendrás que especificar una
colección. Puedes hacerlo por medio de la función `collection()` del
objeto `db` devuelto por la función callback de `connect`.

Digamos que quieres especificar una colección llamada `users`:

```js
var collection = db.collection('users')
```

Para insertar un documento, hay que usar `insert()` en la colección así:

```js

// insertando un documento
// { a : 2 }
collection.insert({
  a: 2
}, function(err, data) {
  // manejo de error

  // otras operaciones
})
```

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recurso:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insert
