Start mongod on port `27017` with `data` as the dbpath

-----------------------------------------------------------
## HINTS

You may have to create the `data` directory.

```bash
mkdir data
```

To start mongo on port 27017, run `mongod --port 27017 --dbpath=./data`.

Then, in another terminal, run `npm install mongodb`.

Then, run `learnyoumongo verify`.

If this lesson is passed, be sure to leave `mongod` running as it will
be used for the remainder of the exercise.
