Qui imparerai come contare il numero dei documenti che rispettano certi criteri.

Usa la collection `parrots` dal database chiamato `learnyoumongo` per 
contare tutti i documenti dove `age` è maggiore del primo argomento passato
alla tua script.

Usando `console.log` stampa il numero su `stdout`.

-----------------------------------------------------------
## SUGGERIMENTI

Per contare il numero dei documenti che rispettano certi criteri
dobbiamo usare la funzione `collection.count()`

Ecco un esempio:

```js
collection.count({
  name: 'foo'
}, function(err, count) {

})
```

Se il tuo programma non dovesse finire l'esecuzione, potresti dimenticare di
chiudere il `db`. Questo può essere fatto chiamando `db.close()` dopo
che hai finito.

## Risorse
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count
