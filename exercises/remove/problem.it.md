Questa lezione comporta la rimozione di un documento con il dato `_id`.

Il nome del database sarà accessibile via `process.argv[2]`.

Il nome della collection sarà passato come secondo argomento della tua script.

Il parametro `_id` sarà passato come terzo argomento della tua script.

-----------------------------------------------------------
## SUGGERIMENTI

Per rimuovere un documento puoi dover chiamare `remove()` sulla collection.

Es.

```js

collection.remove({
  name: 'foo'
}, callback)
```

Il primo argomento di `remove()` è la query.

Se il tuo programma non termina l'esecuzione, potresti aver dimenticato
di chiudere la `db`. Puoi farlo chiamando `db.close()` appena hai finito.

## Risorse
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove
