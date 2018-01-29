Qui impareremo come cercare dei documenti.

In questo esercizio il nome del database è `learnyoumongo`.
Quindi l'url dovrebbe essere simile a: `mongodb://localhost:27017/learnyoumongo`

Usa la collection `parrots` per cercare tutti i documenti in cui `age`
è più grande del primo argomento passato alla tua script.

Usando `console.log`, stampa i documenti nello `stdout`.

-----------------------------------------------------------
## SUGGERIMENTI

Per collegarti al database, puoi usare qualcosa di simile a questo:

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db da accesso al database
})
```

Per ottenere una collection, puoi usare `db.collection('<collection name>')`.

Per trovare un documento o dei documenti puoi chiamare `find()` sulla collection.

Find è un pò diverso da quello che siamo abituati a verdere.

Per accedere agli argomenti puoi usare l'array di stringhe `process.argv` (il primo argomento è memorizzato in terza posizione `process.argv[2]`). Per convertire un intero puoi usare parseInt()

Ecco un esempio:

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```

Se il tuo programma non termina l'esecuzione, potresti dimenticare di chiudere `db`. 
Questo può essere fatto chiamando `db.close()` dopo che hai terminato.

## Risorse:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
