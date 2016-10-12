var mongo = require('mongodb').MongoClient
var age = process.argv[2]

var url = process.env.LEARNYOUMONGO_URI || 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.count({
    age: {
      $gt: +age
    }
  }, function(err, count) {
    if (err) throw err
    console.log(count)
    db.close()
  })
})
