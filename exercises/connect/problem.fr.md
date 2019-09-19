Lancer mongod sur le port `27017` avec `data` en dbpath

-----------------------------------------------------------
## INDICES

Vous devez peut-être créer le dossier `data`.

```bash
mkdir data
```

Pour lancer mongo sur le port 27017, exécuter la commande `mongod --port 27017 --dbpath=./data`.

Puis, dans un autre terminal, lancer la commande `npm install mongodb`.

Et enfin, exécuter la commande `learnyoumongo verify`.

Si cette leçon est validée, assurez-vous de laisser `mongod` tourné en fond pour les autres exercices.