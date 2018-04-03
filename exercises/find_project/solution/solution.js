var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, client) {
  if (err) throw err
  var db = client.db('learnyoumongo')
  var parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }).project({
    name: 1
  , age: 1
  , _id: 0
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    client.close()
  })
})
