Here we will learn how to search for documents but only fetch the fields
we need.

Use the `parrots` collection to find all documents where `age`
is greater than the first argument passed to your script.

The difference from the last lesson will be that we only want the
`name` and `age` properties

Using `console.log`, print the documents to `stdout`.

-----------------------------------------------------------
## HINTS

To find a document or documents, one needs to call `find()` on the collection.

Find is a little bit different than what we are used to seeing.

Here is an example:

```js
collection.find({
  name: 'foo'
}, {
  name: 1
, age: 1
, _id: 0
}).toArray(function(err, documents) {

})
```

If your program does not finish executing, you may have forgotten to
close the `db`. That can be done by calling `db.close()` after you
have finished.

## Resource:
* http://docs.mongodb.org/manual/reference/method/db.collection.find/#explicitly-exclude-the-id-field
