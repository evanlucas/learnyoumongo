Here we will learn how to count the number of documents that
meet certain criteria.

Use the `parrots` collection from the database named `learnyoumongo` to
count all documents where `age` is greater than the first argument
passed to your script.

Using `console.log`, print the number to `stdout`.

-----------------------------------------------------------
## HINTS

To count the number of documents meeting certain criteria,
we must use the `collection.count()` function.

Here is an example:

```js
collection.count({
  name: 'foo'
}, function(err, count) {

})
```

If your program does not finish executing, you may have forgotten to
close the `db`. That can be done by calling `db.close()` after you
have finished.

## Resource
* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#count