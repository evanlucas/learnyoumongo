Connetti a MongoDB alla porta `27017`.
Dovresti connetterti al database chiamato `learnyoumongo` e inserire
un documento alla collection `docs`.

Il documento dovrebbe essere un documento json con le seguenti proprietà:

- `firstName`
- `lastName`

`firstName` sarà passato come primo argomento della lezione.

`lastName` sarà passato come secondo argomento della lezione.

Usa `console.log` per stampare l'oggetto usato per creare il documento.

Assicurati di usare `JSON.stringify` per convertirlo in JSON.

-----------------------------------------------------------
## SUGGERIMENTI

Ricorda che puoi accedere agli argomenti passati usando `process.argv`.

Per poter usare il pacchetto `mongo` devi prima richiederlo in con:

```js
var MongoClient = require('mongodb').MongoClient
```

Per connettersi usa la funzione `connect()` di `MongoClient`.

Es.

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err

})
```

Se ricevi un errore `Connection Refused`, assicurati che `mongod` sia ancora in esecuzione.

Dopo che ti sei connesso con successo, dovrai specificare una collection.

Puoi farlo chiamando la funzione `collection()` nel `db` restituito
nella callback a `connect`.


Supponiamo che tu voglia specificare una collection chiamata `users`:

```js
var collection = db.collection('users')
```

Per inserire un documento potresti chiamare `insert()` nella collection, come:

```js

// inserimento documento
// { a : 2 }
collection.insert({
  a: 2
}, function(err, data) {
  // gestisce l'errore

  // altre operazioni
})
```

Se il tuo programma non finisse l'esecuzione, potresti dimenticare di
chiudere il `db`. Puoi farlo chiamando `db.close()` quando hai finito.

## Risorse
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insert
