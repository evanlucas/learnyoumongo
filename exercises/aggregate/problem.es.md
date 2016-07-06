El siguiente concepto es la agregación. La agregación permite que
hagamos cosas como calcular la suma de un campo de varios documentos
o calcular la media de un campo de documentos que cumplan ciertos
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
`learnyoumongo` que tengan la talla que será el primer parámetro a tu
script.

Usa `console.log()` para imprimir el precio medio redondeando a 2
decimales a stdout después de que lo encuentres.

-----------------------------------------------
## PISTAS

Para usar la función de `aggregate()`, primero necesitas la colección.
La función de `aggregate()` recibe un array (formación) de objetos como
el primer parámetro.

Este array tendrá que contener los pipelines (tuberías)