Qui andremo ad aggiornare un documento nella collection `users`.

Il nome del database sarà accessibile via `process.argv[2]`.

Supponiamo di avere un utente definito come:

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

Vogliamo cambiare l'età di Tina da 30 a 40.

Come proposito di questa lezione, assumiamo che la proprietà `username` sia unica.

-----------------------------------------------------------
## SUGGERIMENTI

Per aggiornare un documento potresti chiamare `update()` sulla collection.

Es.

```js

// documento
// { a: 2, b: 3 }

collection.update({
  a: 2
}, {
  $set: {
    b: 1
  }
}, callback)

// document aggiornato
// { a: 2, b: 1 }
```

Il primo argomento di `update()` è la query. Questa query è quella che filtra i documenti che vogliamo aggiornare. Il
secondo argomento è un oggetto delle proprietà da aggiornare. Stai molto attento alla proprietà `$set`. Se omettessimo `$set`
il documento verrebbe rimpiazzato con un oggetto rappresentato dal secondo argomento.

Se il tuo programma dovesse terminare l'esecuzione, potresti dimenticare
di chiudere `db`. Questo può essere fatto chiamando `db.close()` quando
hai finito.

## Risorse
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
