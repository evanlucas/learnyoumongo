Nous apprendrons ici comment compter le nombre
de documents qui répondre à certains critères.

Utilisez la collection `parrots` de la base de données nommée `learnyoumongo` pour
compter tous les documents où `age` est plus grand que le premier argument
passé à votre script.

Utiliser `console.log`, pour écrire votre réponse dans la sortie standard `stdout`.

-----------------------------------------------------------
## INDICES

Pour compter le nombre de documents répondant à certains critères,
nous devons utiliser la fonction `collection.count()`.

Voici un exemple :

```js
collection.count({
  name: 'foo'
}, function(err, count) {

})
```

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Ressource
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count