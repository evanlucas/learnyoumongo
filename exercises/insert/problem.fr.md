Connectez vous à MongoDB sur le port `27017`.
Vous pouvez vous connecter à la base de données `learnyoumongo`
et ajouter un document dans la collection `docs`.

Le document doit être au format json avec les propriétés suivantes :
- `firstName`
- `lastName`

`firstName` sera passé comme premier argument de l'exercice.

`lastName` sera passé comme second argument de l'exercice.

Utiliser `console.log` pour afficher l'objet utilisé pour créer le document.

Assurez-vous d'utiliser `JSON.stringify` pour le convertir en JSON.

-----------------------------------------------------------
## INDICES

Pour rappel, on peut accéder aux arguments passés en paramètre en utilisant `process.argv`.

Pour utiliser le package `mongo`, il faut d'abord le `require` comme ceci :

```js
var MongoClient = require('mongodb').MongoClient
```

Pour vous connecter, il faut utiliser la fonction `connect()` de `MongoClient`.

Ex.

```js
MongoClient.connect(url, function(err, db) {
  if (err) throw err

})
```

Si vous obtenez une erreur `Connection Refused`, assurez vous que `mongod` tourne toujours.

Après vous être connecté avec succès, vous devrez spécifier une collection.
Cela peut être fait en appelant la fonction `collection()` sur l'argument
`db` retourné par le callback de la function `connect`.

Pour spécifier une collection nommée `users` vous devez :

```js
var collection = db.collection('users')
```

Pour insérer un document, il faut appeler la fonction `insert()` sur la collection, comme ceci :
```js

// inserting document
// { a : 2 }
collection.insert({
  a: 2
}, function(err, data) {
  // handle error

  // other operations
})
```

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Ressource
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#insert
