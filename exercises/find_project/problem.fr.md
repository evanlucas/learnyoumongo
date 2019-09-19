Ici, nous apprendrons à rechercher dans des documents,
mais seulement à aller chercher les champs dont nous avons besoin.
Aussi connu sous le nom de `projection` dans MongoDB.

Rechercher dans la collection `parrots` tous les documents qui ont un `age` 
supérieur au premier argument passé à votre script.

La différence par rapport au dernier exercice,
c'est que nous ne voulons que les propriétés `name` et `age`

Utiliser `console.log`, pour écrire votre réponse dans la sortie standard `stdout`.

-----------------------------------------------------------
## INDICES

Pour trouver un ou plusieurs documents, vous avez besoin d'appeler `find()` sur votre collection.

Find est un peu différent de ce que nous avons l'habitude de voir.

Voici un exemple :

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

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Resource:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#find
