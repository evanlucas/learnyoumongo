Qui impareremo come cercare documenti ma prendendo solo i campi di cui 
abbiamo bisogno. E' anche conosciuta in MongoDB come `proiezione`.

Usa la collection `parrots` dal database `learnyoumongo` per trovare
tutti i documenti dove `age` è più grande del primo argomento passato
alla tua script.

La differenza dalla lezione precedente sarà che noi vogliamo solo
le proprietà `name` e `age`.

Uasndo `console.log` stampa i documenti su `stdout`.

-----------------------------------------------------------
## SUGGERIMENTI

Per trovare un documento o dei documenti puoi chiamare `find()` sulla collection.

Find è un pò diverso da quello che siamo abituati a vedere.ing.

Ecco un esempio:

```js
collection.find({
  name: 'foo'
}, {
  name: 1
, age: 1
, _id: 0
}).toArray(function(err, documents) {

})
```

Se il tuo programma non finisce l'esecuzione, potresti dimenticare di
chiudere il `db`. Questo può essere fatto chiamando `db.close()` dopo
che hai terminato.

## Risorse:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
