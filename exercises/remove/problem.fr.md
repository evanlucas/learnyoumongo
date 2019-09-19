Cet exercice implique la suppression d'un document avec le `_id` donné.

Le nom de la base de données sera accessible via `process.argv[2]`.

Le nom de la collection sera passé comme deuxième argument à votre script.

Le `_id` sera passé comme troisième argument à votre script.

-----------------------------------------------------------
## INDICES

Pour supprimer un document, il faut appeler la fonction `remove()` sur la collection.

Ex.

```js

collection.remove({
  name: 'foo'
}, callback)
```

Le premier argument à la méthode `remove()` est la requête.

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Ressource
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#remove
