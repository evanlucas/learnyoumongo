# learnyoumongo

A [workshopper](https://github.com/workshopper/workshopper) for MongoDB

![ss](https://raw.githubusercontent.com/evanlucas/learnyoumongo/master/screenshot.png)

### What you'll need to run learnyoumongo:

First, you will need [node.js](https://nodejs.org)

It could be easier to use a version manager like [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n)

After you install node.js, proceed to install

### Install

```bash
$ [sudo] npm install -g learnyoumongo
```

### Configuration Options

By default, learnyoumongo will use the MongoDB instance on your local machine on the default port:

```
mongodb://localhost:27017/learnyoumongo
```

If you would like to override the MongoDB URI, you can set the `LEARNYOUMONGO_URI` environment variable. It must be a valid
MongoDB connection string as described at [MongoDB Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/).
That means you can also add authentication and other connection options, such as replicaSet information, that might be required for your
MongoDB instance.

An example would be:

```
mongodb://mongo-server:45011/mystuff
```

That would instruct the learnyoumongo workshopper to use the MongoDB instance on the server named `mongo-server` listening on port 45011, and
have the collections stored in the `mysuff` database.

### Languages

Currently, `learnyoumongo` is the following languages:
 * English
 * Spanish
 * Japanese
 * Russian

## Author

Evan Lucas

## License

MIT (See `LICENSE` for more info)
