Nous apprendrons ici comment rechercher dans des documents.

Dans cet exercice, le nom de la base de données est `learnyoumongo`.
Donc, l'url serait quelque chose comme : `mongodb://localhost:27017/learnyoumongo`

Rechercher dans la collection `parrots` tous les documents qui ont un `age` 
supérieur au premier argument passé à votre script.

Utiliser `console.log`, pour écrire votre réponse dans la sortie standard `stdout`.

-----------------------------------------------------------
## INDICES

Pour vous connecter à la base de donénes, vous pouvez utiliser quelquechose comme ça :

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db gives access to the database
})
```

Pour récupérer la collection, pour vouvez utilise : `db.collection('<collection name>')`.

Pour trouver un ou plusieurs documents, vous avez besoin d'appeler `find()` sur votre collection.

Find est un peu différent de ce que nous avons l'habitude de voir.

Pour accèder aux arguments, vous devez utiliser le tableau de string `process.argv`
(Le premier argument est stocké à la 3ème position `process.argv[2]`).
Pour convertir en Integer, vous pouvez utiliser parseInt().

Voici un exemple :

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Ressources:
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
