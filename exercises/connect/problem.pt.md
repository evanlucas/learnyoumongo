Inicie mongod na port `27017` use `data` como dbpath

-----------------------------------------------------------
## DICAS

Voce deve ter criado um diretorio 'data'.

```bash
mkdir data
```

Para iniciar mongo na porta 27017, execute `mongod --port 27017 --dbpath=./data`.

Entao, em outra janela de terminal, execute `npm install mongodb`.

Entao, execute `learnyoumongo verify`.

Se voce pssou nesse execicio, certifique-se de deixar `mongod` rodando, pois sera 
utilizado no restante dos execercicios.
