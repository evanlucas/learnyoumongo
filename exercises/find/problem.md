Here we will learn how to search for documents.

Use the `parrots` collection to find all documents where `age`
is greater than the first argument passed to your script.

Using `console.log`, print the documents to `stdout`.

-----------------------------------------------------------
## HINTS

To connect to the database, one can use something like this:

```js
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  // db gives access to the database
})
```

To get a collection, one can use `db.collection('<collection name>')`.

To find a document or documents, one needs to call `find()` on the collection.

Find is a little bit different than what we are used to seeing.

Here is an example:

```js
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
```
