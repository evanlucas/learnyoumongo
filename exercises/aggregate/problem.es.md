El siguiente concepto es la agregación. La agregación permite que
hagamos cosas como calcular la suma de un campo de varios documentos
o calcular la media de un campo de documentos que cumplan con ciertos
criterios.

Digamos que tienes una colección llamada `prices` (precios). Cada
documento de precio es modelado así:

```js
{
  "name": "Tshirt",
  "size": "S",
  "price": 10,
  "quantity": 12
  "meta": {
    "vendor": "hanes",
    "location": "US"
  }
}
```

En este ejercicio, tenemos que calcular el precio medio de todos los
documentos en la colección de `prices` de la base de datos llamada
`learnyoumongo` que tengan la talla que será el primer argumento a tu
script.

Usa `console.log()` para imprimir el precio medio redondeando a 2
decimales a stdout después de que lo encuentres.

-----------------------------------------------
## PISTAS

Para usar la función de `aggregate()`, primero necesitas la colección.
La función de `aggregate()` recibe un array (formación) de objetos en
el primer argumento.

Este array tendrá que contener los pipelines (tuberías) para la agregación.
Para leer más acerca de los pipelines, favor de visitar [Aggregation](http://docs.mongodb.org/manual/core/aggregation-introduction/).

Los dos pipelines que utilizaremos son `$match` y `$group`.

### $match

El método de usar `$match` es semejante a las consultas. Nos permite
seleccionar los documentos que cumplan con ciertos criterios.

Por ejemplo:

```js
var match = { $match: { status: 'A' } }
```

Este ejemplo nos dará todos los documentos que tengan un valor igual a `A` en
el campo llamado `status`.

### $group

Usando `$group`, podemos hacer ciertas operaciones en campos especificados.

Digamos que queremos calcular la suma de los valores en el campo `value` donde
`status` es igual a `A`. Después, queremos ponerla en el campo `total`.

Por ejemplo:

```js
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // Este puede ser una cadena de caracteres
  , total: {
      // $sum es la operación que se usa aquí
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // manejo de error
  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
```

Otras operaciones que se pueden usar con `$group` son:

- `$avg`
- `$first`
- `$last`
- `$max`
- `$min`
- `$push`
- `$addToSet`

# Redondeo

El prototipo `Number` contiene una función llamada `toFixed()` que acepta
el número de decimales para redondear y devuelve una cadena de caracteres
que representa el número.

```js
var value = "1"
Number(value).toFixed(5)
// => '1.00000'
```

Si tu programa sigue ejecutando sin parar, quizás te olvidaste de cerrar `db`.
Pon `db.close()` en tu programa después de que hayas hecho todo lo necesario.

## Recursos:
* http://docs.mongodb.org/manual/aggregation/
* http://docs.mongodb.org/manual/core/aggregation-introduction/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate
