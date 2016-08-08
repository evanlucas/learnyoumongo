Here we are going to update a document in the `users` collection.

The database name will be accessible via `process.argv[2]`.

Say we have a user defined like:

```json
{
  "name": "Tina",
  "age": 30,
  "username": "tinatime"
}
```

We want to change Tina's age from 30 to 40.

For the purpose of this lesson, assume that the `username` property is unique.

-----------------------------------------------------------
## HINTS

To update a document, one would need to call `update()` on the collection.

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

The first argument to `update()` is the query. This query is what filters the documents that we are wanting to update. The second argument is an object of the properties to update. Pay close attention to the `$set` property. If we were to omit `$set`, the document would be replaced with the object represented by the second argument.

If your program does not finish executing, you may have forgotten to
close the `db`. That can be done by calling `db.close()` after you
have finished.

## Resources
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#update
* http://docs.mongodb.org/manual/tutorial/modify-documents/
* http://docs.mongodb.org/manual/reference/operator/update/set/#set
