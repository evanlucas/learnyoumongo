Ahora vamos a aprender cómo contar el número de documentos
que cumplan con ciertos criterios.

Usa la colección llamada `parrots` de la base de datos llamada
`learnyoumongo` para contar todos los documentos donde`age` sea
mayor que el primer argumento pasado a tu script.

Usando `console.log`, haz que se imprima el número a `stdout`.

-----------------------------------------------------------
## PISTAS

Para contar el número de documentos que cumplan con ciertos criterios,
tenemos que usar la función `collection.count()`.

Por ejemplo:

```js
collection.count({
  name: 'foo'
}, function(err, count) {

})
```

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recurso:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count
