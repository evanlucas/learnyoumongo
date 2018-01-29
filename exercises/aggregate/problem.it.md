Il prossimo è l'aggregazione. L'aggregazione permette di fare cose
come calcolare la somma di un campo su più documenti o la media
di un campo su documenti che rispettano particolari criteri.

Supponiamo di avere una collection chiamata `prices`. Ogni documento prezzo è modellato
in modo simile a:

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

In questo esercizio abbiamo la necessità di calcolare il prezzo medio per tutti
i documenti nella collection `prices` nel database chiamato `learnyoumongo` che
hanno la dimensione che sarà passata come primo argomento della tua script.

Usa `console.log` per stampare il prezzo medio approssimato a 2 decimali
nello `stdout` dopo che lo hai trovato.

-----------------------------------------------------------
## SUGGERIMENTI

Per usare la funzione `aggregate()`, abbiamo prima bisogno della collection.
La funzione `aggregate()` prende un array di oggetti come primo argomento.

Questo array conterrà le diverse pipeline per l'aggregazione.
Per sapere di più sulle pipeline, visita http://docs.mongodb.org/manual/core/aggregation-introduction/.
Per sapere di più su `aggregate()` visita http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate.

I due stadi principali della pipeline che useremo saranno `$match` e `$group`

### $match

`$match` viene usato in modo simile al modo in cui viene fatto nella query. Esso permette di selezionare
i documenti che rispettano certi criteri.

Es.

```js
var match = { $match: { status: 'A' } }
```

L'esempio precedente corrisponde a tutti i documenti che hanno la 
proprietà `status` uguale a `A`.

### $group

`$group` è quelo che ci permette di eseguire operazioni con certe proprietà.

Così, supponiamo di voler calcolare la somma dei valori della proprietà
`value` dove `status` è uguale a `A` e salvare il valore nella proprietà
`total`.

Es.

```js
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // Questo potrebbe essere una stringa arbitraria in questo caso
  , total: {
      // $sum è l'operatore usato qui
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // gestisce l'errore
  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
```
Altri operatori usati nello stadio `$group` sono:

- `$avg`
- `$first`
- `$last`
- `$max`
- `$min`
- `$push`
- `$addToSet`

# Arrotondamento

Il prototipo `Number`contiene una funzione `toFixed()` la quale accetta il numero
di decimali al quale vogliamo fare l'arrotondamento e restituisce una rappresentazione
in formato stringa.

      var value = "1"
      Number(value).toFixed(5)
      // => '1.00000'

Se il tuo programma non dovesse finire l'esecuzione, potresti dimenticare
di chiudere `db`. Questo può essere fatto chiamando `db.close()` dopo
che hai finito.

## Risorse
* http://docs.mongodb.org/manual/aggregation/
* http://docs.mongodb.org/manual/core/aggregation-introduction/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate
