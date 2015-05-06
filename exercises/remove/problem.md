This lesson involves removing a document with the given `_id`.

The collection name will be passed as the first argument to your script.

The `_id` will be passed as the second argument to your script.

-----------------------------------------------------------
## HINTS

To remove a document, one would need to call `remove()` on the collection.

Ex.

```js

collection.remove({
  name: 'foo'
}, callback)
```

The first argument to `remove()` is the query.
