Inicia mongod en el puerto `27017` usando `data` como la
ruta (path) `dbpath`.

-----------------------------------------------------------
## PISTA

Puede ser que tengas que crear la carpeta `data`.

```bash
mkdir data
```

Para iniciar mongo en el puerto 27017, ejecuta `mongod --port 27017 --dbpath=./data`.

Luego, en otra consola, ejecuta `npm install mongodb`.

Después, ejecuta `learnyoumongo verify`.

Si la solución se verifica, asegúrate de que `mongod` todavía esté ejecutando ya que
vamos a necesitarlo durante el resto de los ejercicios.