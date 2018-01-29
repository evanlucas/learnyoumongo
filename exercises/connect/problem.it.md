Avvia mongod sulla porta `27017` con `data` come dbpath

-----------------------------------------------------------
## SUGGERIMENTI

Devi aver creto la directory `data`.

```bash
mkdir data
```

Per avviare mongo sulla porta 27017, esegui `mongod --port 27017 --dbpath=./data`.

Quindi, un un altro terminale, esegui `npm install mongodb`.

Infine esegui `learnyoumongo verify`.

Se questa lezione è completata, assicurati di lasciare `mongod` in eseguzione 
in modo che possa essere usato per il resto dell'esercizio.

