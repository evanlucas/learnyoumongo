La prochaine étape est l'agrégation. Elle permet de faire des choses comme
calculer la somme d'un champ de plusieurs documents ou la moyenne
d'un champ de documents répondant à des critères spécifiques.

Vous avez une collection nommée `prices`. Chaque document "price" est modélisé
comme cela :

```js
{
  "name": "Tshirt",
  "size": "S",
  "price": 10,
  "quantity": 12
  "meta": {
    "vendor": "hanes",
    "location": "US"
  }
}
```

Dans cet exercice, nous devons calculer le prix moyen de tous les documents
de la collection `prices` qui se trouve dans la base de données `learnyoumongo`.
La taille sera passé comme premier argument à votre script.

Utiliser `console.log()` pour afficher le prix moyen arrondi à 2 décimals près
sur le sortie standard stdout.

-----------------------------------------------------------
## INDICES

Pour utiliser la fonction `aggregate()`, il faut d'abord avoir une collection.
La fonction `aggregate()` prend un tableau d'objets comme premier argument.

Ce tableau contiendra les différents pipelines pour l'agrégation.
Pour en savoir plus sur les pipelines, veuillez consulter le site http://docs.mongodb.org/manual/core/aggregation-introduction/
Pour en savoir plus sur `aggregate()`, veuillez visiter http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate.

Les deux principales étapes du pipeline que nous utiliserons seront `$match` et `$group`.

### $match

`$match` est utilisé de la même manière qu'une requête. Il nous permet de
sélectionner les documents qui répondent à certains critères.

Ex.

```js
var match = { $match: { status: 'A' } }
```

L'exemple ci-dessus correspondra à tous les documents qui ont
une propriété `statut` égal à `A`.

### $group

`$group` est ce qui nous permet de mener des opérations sur certaines propriétés.

Donc, disons que nous voulions obtenir la somme des valeurs de la propriété `value`
quand le statut est égal à `A` et ensuite le placer dans la propriété `total`.

Ex.

```js
// [
//  { status: 'A', value: 1 },
//  { status: 'B', value: 2 },
//  { status: 'A', value: 10 }
// ]

collection.aggregate([
  { $match: { status: 'A' }}
, { $group: {
    _id: 'total' // This can be an arbitrary string in this case
  , total: {
      // $sum is the operator used here
      $sum: '$value'
    }
  }}
]).toArray(function(err, results) {
  // handle error
  console.log(results)
  // => [
  // =>   { _id: 'total', total: 11 }
  // => ]
})
```
Les autres opérateurs utilisés dans l'étape `$group` incluent :
- `$avg`
- `$first`
- `$last`
- `$max`
- `$min`
- `$push`
- `$addToSet`

# Arrondir

Le prototype `Number` contient une fonction `toFixed()`,
qui accepte le nombre de décimales que vous souhaitez arrondir,
et retourne une chaîne de caractères.

      var value = "1"
      Number(value).toFixed(5)
      // => '1.00000'

Si votre programme ne fini pas son exécution,
vous avez peut être oublier de fermer `db`.
Pour cela il faut appeler `db.close()` en dernière instruction.

## Ressources
* http://docs.mongodb.org/manual/aggregation/
* http://docs.mongodb.org/manual/core/aggregation-introduction/
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#aggregate
