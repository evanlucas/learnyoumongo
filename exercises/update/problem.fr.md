Ici nous allons mettre à jour un document dans la collection `users`.

Le nom de la base de données sera accessible via `process.argv[2]`.

Disons que nous avons un utilisateur défini comme :

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

Nous voulons change l'age de Tinade 30 à 40 ans.

Pour les besoins de cet exercice, supposons que la propriété `username` est unique.

-----------------------------------------------------------
## INDICES

Pour modifier un document, il faut appeler la fonction `update()` sur la collection.

Ex.

```js

// document
// { a: 2, b: 3 }

collection.update({
  a: 2
}, {
  $set: {
    b: 1
  }
}, callback)

// document was updated
// { a: 2, b: 1 }
```

Le premier argument à la méthode `update()` est la requête.
Cette requête est ce qui permet de filtrer les documents que nous voulons mettre à jour.
Le second argument est un objet des propriétés à mettre à jour.
Portez une attention particulière à la propriété `$set`.
Si nous devions omettre `$set`, le document serait remplacé par l'objet représenté par le second argument.

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Ressources
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
