Start mongod on port `27017` with `data` as the dbpath

-----------------------------------------------------------
## HINTS

You may have to create the `data` directory.

```bash
mkdir data
```

### Running MongoDB locally

To start mongo on port 27017, run `mongod --port 27017 --dbpath=./data`.

Then, in another terminal, run `npm install mongodb`.

Then, run `learnyoumongo verify`.

If this lesson is passed, be sure to leave `mongod` running as it will
be used for the remainder of the exercise.

### Running MongoDB remotely

If you would like to use a MongoDB instance on another server, you can set the `LEARNYOUMONGO_URI`
environment variable. It must be a valid MongoDB connection string as described at
[MongoDB Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).

An example would be:

```
mongodb://mongo-server:45011/mystuff
```

That would instruct the learnyoumongo workshopper to use the MongoDB instance on the server named `mongo-server` listening on port 45011, and
have the collections stored in the `mysuff` database.