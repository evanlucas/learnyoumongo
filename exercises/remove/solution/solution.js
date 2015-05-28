var mongo = require('mongodb').MongoClient

var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection(process.argv[2])
  collection.remove({
    _id: process.argv[3]
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
